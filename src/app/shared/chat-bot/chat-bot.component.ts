import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
  Renderer2,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../shared/chat-service.service';
import { LocalStorageService } from '../local-storage.service';
import { IpService } from '../ip.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface Message {
  role: string;
  content: string;
}

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css'],
  imports : [CommonModule],
  standalone : true
})
export class ChatBotComponent {
  constructor(
    private ipService: IpService,
    private chatService: ChatService,
    private localStorageService: LocalStorageService,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private cdRef: ChangeDetectorRef
  ) {
    this.localStorageService.seedData();
    this.localStorageService._waitingResponse$.subscribe((waitingStatus) => {
      this.isChatLoading = waitingStatus;
    });
    this.localStorageService._myData$.subscribe((messages) => {
      this.messages = messages;
    });
  }

  ngOnInit() {
    this.fetchIpAddress();
  }

  parseMessage(content: string): SafeHtml {
    const urlPattern = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;
    const sanitizedContent = content.replace(
      urlPattern,
      '<button class="link-button text-blue-500 underline" data-url="$2">$1</button>'
    );
    return this.sanitizer.bypassSecurityTrustHtml(sanitizedContent);
  }

  fetchIpAddress() {
    this.ipService.getIpAddress().subscribe(
      (response: any) => {
        this.ipAddress = response.ip;
      },
      (error) => {
        console.error('Failed to fetch IP address:', error);
      }
    );
  }

  ngAfterViewChecked(): void {
    const buttons = document.querySelectorAll('.link-button');
    buttons.forEach((button) => {
      if (!button.hasAttribute('data-click-bound')) {
        this.renderer.listen(button, 'click', () => {
          const url = (button as HTMLElement).getAttribute('data-url');
          if (url) {
            this.navigateToUrl(url);
          }
        });
        button.setAttribute('data-click-bound', 'true');
      }
    });
  }

  navigateToUrl(url: string): void {
    window.open(url, '_blank');
  }

  isChatLoading: boolean = false;
  messages: Message[] = [];
  userMessage: string = '';
  ipAddress: string = '';

  @Output() closeChatEvent = new EventEmitter<void>();
  @ViewChild('scrollableContainer') private scrollableContainer:
    | ElementRef
    | undefined;
  @ViewChild('fullScreenScrollableContainer')
  private fullScreenScrollableContainer: ElementRef | undefined;

  closeChat() {
    this.closeChatEvent.emit();
  }

  sendMessage() {
    if (!this.userMessage) return;

    this.isChatLoading = true;
    this.localStorageService.addMessage({
      role: 'user',
      content: this.userMessage,
    });
    this.localStorageService.setWaitingStatus(true);

    try {
      this.chatService
        .sendMessage(this.userMessage, this.ipAddress)
        .subscribe((response: any) => {
          this.isChatLoading = false;
          this.localStorageService.setWaitingStatus(false);
          this.localStorageService.addMessage({
            role: 'bot',
            content: response.message,
          });
        });
    } catch (e) {
      this.isChatLoading = false;
      console.error('Error sending message:', e);
    }

    this.userMessage = ''; // Clear the input field
  }
}
