import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  Renderer2,
  ChangeDetectorRef
} from "@angular/core";
import { ChatService } from "../../shared/chat-service.service";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { NgForOf, NgIf } from "@angular/common";
import { LocalStorageService } from "../local-storage.service";
import { takeUntil } from "rxjs";
import { IpService } from "../ip.service";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

export interface Message {
  role: string;
  content: string;
}
@Component({
  selector: "app-bot",
  templateUrl: "./bot.component.html",
  styleUrls: ["./bot.component.css"],
})
export class BotComponent {
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
    // const sanitizedContent = content.replace(urlPattern, '<a href="$2" target="_blank" class="text-blue-500 underline">$1</a>');
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
        console.error("Failed to fetch IP address:", error);
      }
    );
  }
  ngAfterViewChecked(): void {
    const buttons = document.querySelectorAll(".link-button");
    buttons.forEach((button) => {
      if (!button.hasAttribute("data-click-bound")) {
        this.renderer.listen(button, "click", () => {
          const url = (button as HTMLElement).getAttribute("data-url");
          if (url) {
            this.navigateToUrl(url);
          }
        });
        button.setAttribute("data-click-bound", "true"); // Mark the button as having a click event bound
      }
    });

    // Manually trigger change detection to avoid ExpressionChangedAfterItHasBeenCheckedError
    // this.cdRef.detectChanges();
  }

  navigateToUrl(url: string): void {
    window.open(url, "_blank");
  }

  isChatLoading: boolean = false;
  messages: Message[] = [];
  chatForm = new FormGroup({
    message: new FormControl("", [Validators.required]),
  });
  ipAddress: string = "";

  @Output() closeChatEvent = new EventEmitter<void>();
  @ViewChild("scrollableContainer") private scrollableContainer:
    | ElementRef
    | undefined;
  @ViewChild("fullScreenScrollableContainer")
  private fullScreenScrollableContainer: ElementRef | undefined;

  closeChat() {
    this.closeChatEvent.emit();
  }

  sendMessage() {
    this.isChatLoading = true;
    this.localStorageService.addMessage({
      role: "user",
      content: this.chatForm.value.message!,
    });
    this.localStorageService.setWaitingStatus(true);

    const messageContent = this.chatForm.value.message!;
    try {
      this.chatService
        .sendMessage(messageContent, this.ipAddress)
        .subscribe((response: any) => {
          // console.log(response)
          //  console.log("Response: ", response);
          this.isChatLoading = false;
          this.localStorageService.setWaitingStatus(false);
          this.localStorageService.addMessage({
            role: "bot",
            content: response.message,
          });
        });
    } catch (e) {
      this.isChatLoading = false;
    }
    this.chatForm.reset();
  }
}
