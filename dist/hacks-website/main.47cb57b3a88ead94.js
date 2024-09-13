"use strict";
(self.webpackChunkHacks_Website = self.webpackChunkHacks_Website || []).push([
  [179],
  {
    241: (f, A, c) => {
      var g = c(6593),
        M = c(205),
        e = c(5678),
        s = c(6814);
      function N(i, r) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 5),
            e.O4$(),
            e.TgZ(1, "svg", 6),
            e._UZ(2, "path", 7),
            e.qZA(),
            e.kcU(),
            e.TgZ(3, "p", 8),
            e._uU(4),
            e.qZA()()),
          2 & i)
        ) {
          const t = r.$implicit;
          e.xp6(4), e.hij("", t, " ");
        }
      }
      let D = (() => {
          class i {
            static #e = (this.ɵfac = function (o) {
              return new (o || i)();
            });
            static #t = (this.ɵcmp = e.Xpm({
              type: i,
              selectors: [["app-prize-card"]],
              inputs: { prize: "prize" },
              decls: 10,
              vars: 10,
              consts: [
                [1, "container", "lg:max-w-[420px]"],
                [
                  "alt",
                  "",
                  1,
                  "absolute",
                  "-top-3",
                  "-right-3",
                  "w-1/4",
                  "max-sm:w-1/4",
                  3,
                  "src",
                ],
                [1, "text-xl", "py-3", "font-semibold", "text-white"],
                [1, "text-xl"],
                [
                  "class",
                  "flex  gap-x-3 py-[5px] items-center mt-4 border-t border-white border-opacity-30",
                  4,
                  "ngFor",
                  "ngForOf",
                ],
                [
                  1,
                  "flex",
                  "gap-x-3",
                  "py-[5px]",
                  "items-center",
                  "mt-4",
                  "border-t",
                  "border-white",
                  "border-opacity-30",
                ],
                [
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                  "viewBox",
                  "0 0 24 24",
                  "fill",
                  "currentColor",
                  1,
                  "w-8",
                  "h-6",
                  "text-[#AC6AFF]",
                  "flex-none",
                ],
                [
                  "fill-rule",
                  "evenodd",
                  "d",
                  "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
                  "clip-rule",
                  "evenodd",
                ],
                [1, "text-gray-300", "leading-relaxed"],
              ],
              template: function (o, n) {
                1 & o &&
                  (e.TgZ(0, "div", 0)(1, "div"),
                  e._UZ(2, "img", 1),
                  e.TgZ(3, "h2"),
                  e._uU(4),
                  e.qZA(),
                  e.TgZ(5, "p", 2),
                  e._uU(6, "$ "),
                  e.TgZ(7, "span", 3),
                  e._uU(8),
                  e.qZA()(),
                  e.YNc(9, N, 5, 1, "div", 4),
                  e.qZA()()),
                  2 & o &&
                    (e.xp6(1),
                    e.Gre(
                      "",
                      "First" == (null == n.prize ? null : n.prize.place)
                        ? "py-[32px]"
                        : "py-[16px]",
                      " relative   w-full lg:w-[100] px-5   flex flex-col bg-[#0E0C15]  rounded-3xl border-white border-[0.25px] border-opacity-30"
                    ),
                    e.xp6(1),
                    e.s9C("src", null == n.prize ? null : n.prize.image, e.LSH),
                    e.xp6(1),
                    e.Gre(
                      "",
                      "First" == (null == n.prize ? null : n.prize.place)
                        ? "text-[#FFC876]"
                        : "Second" == (null == n.prize ? null : n.prize.place)
                        ? "text-[#C0C0C0]"
                        : "text-[#CD7F32]",
                      "   text-xl  opacity-100"
                    ),
                    e.xp6(1),
                    e.hij(
                      "",
                      null == n.prize ? null : n.prize.place,
                      " Place "
                    ),
                    e.xp6(4),
                    e.Oqu(null == n.prize ? null : n.prize.prize),
                    e.xp6(1),
                    e.Q6J("ngForOf", null == n.prize ? null : n.prize.awards));
              },
              dependencies: [s.sg],
            }));
          }
          return i;
        })(),
        F = (() => {
          class i {
            static #e = (this.ɵfac = function (o) {
              return new (o || i)();
            });
            static #t = (this.ɵcmp = e.Xpm({
              type: i,
              selectors: [["app-track-card"]],
              inputs: { track: "track" },
              decls: 13,
              vars: 3,
              consts: [
                [
                  1,
                  "max-w-4xl",
                  "flex",
                  "w-full",
                  "h-full",
                  "flex-col",
                  "items-stretch",
                  "justify-stretch",
                  "relative",
                  "overflow-hidden",
                  "p-4",
                ],
                [1, "relative", "break-words", "h-full", "group"],
                [
                  1,
                  "absolute",
                  "-inset-1",
                  "bg-gradient-to-r",
                  "from-purple-600",
                  "to-yellow-600",
                  "rounded-lg",
                  "blur",
                  "opacity-60",
                  "transition",
                  "duration-1000",
                  "group-hover:duration-200",
                ],
                [
                  1,
                  "relative",
                  "h-full",
                  "p-3",
                  "bg-[#0E0C15]",
                  "rounded-lg",
                  "leading-none",
                  "flex",
                  "items-stretch",
                  "justify-start",
                  "space-x-6",
                ],
                [
                  "fill",
                  "currentColor",
                  "viewBox",
                  "0 0 24 24",
                  1,
                  "w-6",
                  "h-6",
                  "text-purple-600",
                  "flex-shrink-0",
                ],
                [
                  "fill-rule",
                  "evenodd",
                  "d",
                  "M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z",
                  "clip-rule",
                  "evenodd",
                ],
                [1, "space-y-2", "flex", "flex-col", "justify-between"],
                [1, "text-white", "break-all", "text-xl"],
                [1, "text-gray-400", "py-2", "whitespace-normal"],
                ["target", "_blank", 1, "block", "text-indigo-400", "text-xl"],
              ],
              template: function (o, n) {
                1 & o &&
                  (e.TgZ(0, "div", 0)(1, "div", 1),
                  e._UZ(2, "div", 2),
                  e.TgZ(3, "div", 3),
                  e.O4$(),
                  e.TgZ(4, "svg", 4),
                  e._UZ(5, "path", 5),
                  e.qZA(),
                  e.kcU(),
                  e.TgZ(6, "div", 6)(7, "p", 7),
                  e._uU(8),
                  e.qZA(),
                  e.TgZ(9, "p", 8),
                  e._uU(10),
                  e.qZA(),
                  e.TgZ(11, "h2", 9),
                  e._uU(12),
                  e.qZA()()()()()),
                  2 & o &&
                    (e.xp6(8),
                    e.Oqu(null == n.track ? null : n.track.title),
                    e.xp6(2),
                    e.Oqu(null == n.track ? null : n.track.description),
                    e.xp6(2),
                    e.hij("$", null == n.track ? null : n.track.prize, ""));
              },
              styles: [
                '.plan-card[_ngcontent-%COMP%]{background:#151517;width:15rem;padding-left:2rem;padding-right:2rem;padding-top:10px;padding-bottom:20px;border-radius:10px;font-family:Poppins,sans-serif}.plan-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:15px;font-size:27px;font-weight:600}.plan-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;margin-top:-4px;color:#4d4d4d;font-size:12px;font-weight:400}.etiquet-price[_ngcontent-%COMP%]{position:relative;background:indigo;width:14.46rem;margin-left:-.65rem;padding:.2rem 1.2rem;border-radius:5px 0 0 5px}.etiquet-price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding-top:.4rem;display:flex;font-size:1.9rem;font-weight:500}.etiquet-price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:before{content:"$";margin-right:5px;font-size:15px;font-weight:300}.etiquet-price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:after{margin-left:5px;font-size:15px;font-weight:300}.etiquet-price[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;bottom:-23px;right:0;width:0;height:0;border-top:13px solid indigo;border-bottom:10px solid transparent;border-right:13px solid transparent;z-index:-6}.benefits-list[_ngcontent-%COMP%]{margin-top:16px}.benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;font-size:14px}.benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#4d4d4d;list-style:none;margin-bottom:.2rem;display:flex;align-items:center;gap:.5rem}.benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:.9rem;fill:currentColor}.benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300}.button-get-plan[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:1.2rem}.button-get-plan[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background:#000446;color:#fff;padding:10px 15px;border-radius:5px;text-decoration:none;font-size:.8rem;letter-spacing:.05rem;font-weight:500;transition:all .3s ease}.button-get-plan[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:translateY(-3%);box-shadow:0 3px 10px #cfd4dee6}.button-get-plan[_ngcontent-%COMP%]   .svg-rocket[_ngcontent-%COMP%]{margin-right:10px;width:.9rem;fill:currentColor}',
              ],
            }));
          }
          return i;
        })();
      function R(i, r) {
        1 & i && e._UZ(0, "app-track-card", 20),
          2 & i && e.Q6J("track", r.$implicit);
      }
      let U = (() => {
        class i {
          constructor() {
            (this.awards = [
              "Trip to Addis Ababa, including airfare, hotel, food and other expenses.",
              "Opportunity to pitch one's project idea to renowned tech individuals and venture capitalists.",
              "Certificate of achievement.",
            ]),
              (this.missionTextPart1 =
                "A2SV (Africa to Silicon Valley) is a US-based nonprofit academy igniting Africa's tech revolution with comprehensive software engineering training and tech-driven solutions"),
              (this.missionTextPart2 =
                "Through collaborations with top African universities and tech titans, A2SV has created a thriving ecosystem for emerging talent since 2019. Our program is free, breaking financial barriers, nurturing dreams, and democratizing the path to a tech-driven future."),
              (this.secondPrize = {
                place: "Second",
                prize: "6,000",
                padding: "32px",
                color: "#FFC876",
                image: "assets/silver 1 (no bg).png",
                awards: [...this.awards, "Custom-designed A2SV swag."],
              }),
              (this.firstPrize = {
                place: "First",
                prize: "10,000",
                padding: "32px",
                color: "#AC6AFF",
                image: "assets/gold 1 (no bg).png",
                awards: [
                  ...this.awards,
                  "Direct placement opportunity in the A2SV education cohort 6.",
                  "Custom-designed A2SV swag.",
                ],
              }),
              (this.thirdPrize = {
                place: "Third",
                prize: "4,000",
                padding: "32px",
                color: "#E298FF",
                image: "assets/bronze 1.png",
                awards: this.awards,
              }),
              (this.tracks = [
                {
                  title: "Best Technical Implementation Award",
                  description:
                    "Recognizes the project with the most impressive and innovative technical implementation.",
                  prize: "2500",
                },
                {
                  title: "Most Potential for Positive Change Award",
                  description:
                    "Highlights the project that shows the greatest potential for making a positive impact and driving change.",
                  prize: "2500",
                },
                {
                  title: "Best User Experience Award",
                  description:
                    "Rewards the project that delivers an exceptional and intuitive user experience.",
                  prize: "2500",
                },
                {
                  title: "Cross-Domain Collaboration Award",
                  description:
                    "Acknowledges teams that effectively combine AI techniques with expertise from different fields.",
                  prize: "2500",
                },
              ]),
              (this.prizes = [
                this.secondPrize,
                this.firstPrize,
                this.thirdPrize,
              ]);
          }
          static #e = (this.ɵfac = function (o) {
            return new (o || i)();
          });
          static #t = (this.ɵcmp = e.Xpm({
            type: i,
            selectors: [["app-prize2024"]],
            decls: 24,
            vars: 4,
            consts: [
              [
                "id",
                "prize2024",
                1,
                "fade",
                "min-h-screen",
                "py-24",
                "max-sm:px-4",
                "max-md:py-16",
                "max-xl:px-12",
                "px-5",
                "flex",
                "flex-col",
                "justify-center",
                "items-center",
              ],
              [
                1,
                "max-w-6xl",
                "flex",
                "flex-col",
                "justify-center",
                "items-center",
              ],
              [1, "mb-16", "relative", "w-full"],
              ["id", "bigVideo", 1, "stack", "w-full", "relative"],
              [
                1,
                "text-center",
                "aspect-[96/54]",
                "w-4/5",
                "max-sm:w-full",
                "card",
                "bg-black",
                "relative",
              ],
              [
                "aria-hidden",
                "true",
                1,
                "absolute",
                "-inset-[2px]",
                "mx-auto",
                "bg-gradient-to-r",
                "from-yellow-400",
                "to-indigo-600",
                "rounded-2xl",
              ],
              [
                "aria-hidden",
                "true",
                1,
                "absolute",
                "inset-0",
                "mx-auto",
                "h-full",
                "w-full",
                "bg-indigo-800",
                "rounded-2xl",
              ],
              [1, "relative", "h-full", "w-full"],
              [
                "id",
                "videoIframe",
                "src",
                "https://www.youtube.com/embed/Cct1ix0Er88?si=BDBKqeDBNnOfOFdY",
                "frameborder",
                "0",
                "allow",
                "autoplay; fullscreen; picture-in-picture",
                "allowfullscreen",
                "",
                1,
                "h-full",
                "w-full",
                "absolute",
                "bg-black",
                "inset-0",
                "object-center",
                "object-contain",
                "rounded-2xl",
              ],
              [
                1,
                "text-center",
                "aspect-[94/56]",
                "card",
                "w-4/5",
                "max-sm:w-full",
                "bg-indigo-800",
              ],
              [
                1,
                "text-center",
                "aspect-[92/58]",
                "card",
                "w-4/5",
                "max-sm:w-full",
                "bg-indigo-800",
              ],
              [
                1,
                "sm:text-[4rem]",
                "text-center",
                "text-4xl",
                "font-semibold",
                "mb-4",
                "text-white",
              ],
              [
                1,
                "flex",
                "pb-16",
                "items-center",
                "max-lg:flex-wrap",
                "max-sm:flex-col",
                "gap-x-12",
                "gap-y-8",
                "pt-12",
                "justify-center",
              ],
              [1, "max-lg:order-2"],
              [3, "prize"],
              [1, "max-lg:order-1"],
              [1, "max-lg:order-3"],
              [
                1,
                "sm:text-4xl",
                "text-center",
                "text-2xl",
                "font-medium",
                "mb-4",
                "text-white",
              ],
              [
                1,
                "grid",
                "grid-cols-2",
                "pt-8",
                "gap-4",
                "max-lg:grid-cols-2",
                "max-md:grid-cols-1",
                "items-stretch",
              ],
              [3, "track", 4, "ngFor", "ngForOf"],
              [3, "track"],
            ],
            template: function (o, n) {
              1 & o &&
                (e.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(
                  4,
                  "div",
                  4
                ),
                e._UZ(5, "div", 5),
                e.TgZ(6, "div", 6)(7, "div", 7),
                e._UZ(8, "iframe", 8),
                e.qZA()()(),
                e._UZ(9, "div", 9)(10, "div", 10),
                e.qZA()(),
                e.TgZ(11, "p", 11),
                e._uU(12, " $30K Prize "),
                e.qZA(),
                e.TgZ(13, "div", 12)(14, "div", 13),
                e._UZ(15, "app-prize-card", 14),
                e.qZA(),
                e.TgZ(16, "div", 15),
                e._UZ(17, "app-prize-card", 14),
                e.qZA(),
                e.TgZ(18, "div", 16),
                e._UZ(19, "app-prize-card", 14),
                e.qZA()(),
                e.TgZ(20, "p", 17),
                e._uU(21, " Other Prize Tracks "),
                e.qZA(),
                e.TgZ(22, "div", 18),
                e.YNc(23, R, 1, 1, "app-track-card", 19),
                e.qZA()()()),
                2 & o &&
                  (e.xp6(15),
                  e.Q6J("prize", n.secondPrize),
                  e.xp6(2),
                  e.Q6J("prize", n.firstPrize),
                  e.xp6(2),
                  e.Q6J("prize", n.thirdPrize),
                  e.xp6(4),
                  e.Q6J("ngForOf", n.tracks));
            },
            dependencies: [s.sg, D, F],
          }));
        }
        return i;
      })();
      var p = c(5619);
      let v = (() => {
          class i {
            constructor() {
              (this.modalOpenSource = new p.X(!1)),
                (this.modalOpen$ = this.modalOpenSource.asObservable()),
                (this.eligibilityCheckedSource = new p.X(!1)),
                (this.eligibilityChecked$ =
                  this.eligibilityCheckedSource.asObservable()),
                (this.showEligibilitySource = new p.X(!1)),
                (this.showEligibility$ =
                  this.showEligibilitySource.asObservable()),
                (this.registrationTypeSource = new p.X(null)),
                (this.registrationType$ =
                  this.registrationTypeSource.asObservable());
            }
            openModal() {
              this.modalOpenSource.next(!0);
            }
            closeModal() {
              this.modalOpenSource.next(!1),
                this.showEligibilitySource.next(!1);
            }
            checkEligibility() {
              this.eligibilityCheckedSource.next(!0),
                this.showEligibilitySource.next(!1);
            }
            showEligibility() {
              this.showEligibilitySource.next(!0);
            }
            setRegistrationType(t) {
              this.registrationTypeSource.next(t);
            }
            switchRegistrationType() {
              this.registrationTypeSource.next(
                "individual" === this.registrationTypeSource.value
                  ? "team"
                  : "individual"
              );
            }
            static #e = (this.ɵfac = function (o) {
              return new (o || i)();
            });
            static #t = (this.ɵprov = e.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            }));
          }
          return i;
        })(),
        S = (() => {
          class i {
            static #e = (this.ɵfac = function (o) {
              return new (o || i)();
            });
            static #t = (this.ɵmod = e.oAB({ type: i }));
            static #i = (this.ɵinj = e.cJS({ imports: [s.ez] }));
          }
          return i;
        })();
      function Q(i, r) {
        1 & i && e._UZ(0, "div", 43);
      }
      function Y(i, r) {
        1 & i && e._UZ(0, "div", 43);
      }
      function G(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 29)(1, "div", 30)(2, "button", 31),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.closeModal());
            }),
            e.O4$(),
            e.TgZ(3, "svg", 32),
            e._UZ(4, "path", 33),
            e.qZA()(),
            e.kcU(),
            e.TgZ(5, "iframe", 34),
            e.NdJ("load", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.onIframeLoad());
            })("error", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.onIframeLoad());
            }),
            e.qZA(),
            e.TgZ(6, "div", 35),
            e.YNc(7, Q, 1, 0, "div", 36),
            e.qZA()(),
            e.TgZ(8, "div", 37)(9, "div", 38)(10, "button", 39),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.closeModal());
            }),
            e.TgZ(11, "span", 40),
            e._uU(12, "Close menu"),
            e.qZA(),
            e.O4$(),
            e.TgZ(13, "svg", 32),
            e._UZ(14, "path", 33),
            e.qZA()(),
            e.kcU(),
            e.TgZ(15, "iframe", 41),
            e.NdJ("load", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.onIframeLoad());
            })("error", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.onIframeLoad());
            }),
            e.qZA(),
            e.TgZ(16, "div", 42),
            e.YNc(17, Y, 1, 0, "div", 36),
            e.qZA()()()();
        }
        if (2 & i) {
          const t = e.oxw();
          e.xp6(5),
            e.Q6J("src", t.sanitizedUrl, e.uOi),
            e.xp6(2),
            e.Q6J("ngIf", t.isIframeLoading),
            e.xp6(8),
            e.Q6J("src", t.sanitizedUrl, e.uOi),
            e.xp6(2),
            e.Q6J("ngIf", t.isIframeLoading);
        }
      }
      let V = (() => {
        class i {
          constructor(t) {
            (this.sanitizer = t),
              (this.showModal = !1),
              (this.registrationLink = ""),
              (this.comingName = ""),
              (this.closeModalEvent = new e.vpe()),
              (this.isIframeLoading = !0),
              (this.showShareModal = !1),
              (this.telegramSharingLink =
                "https://t.me/share/url?url=https://res.cloudinary.com/eskalate/image/upload/v1718181258/Hackathon-2024/Hackathon_Registration_Card.png&text=I've%20just%20registered%20for%20the%20A2SV%20Hackathon!%20Join%20me%20and%20share%20your%20own%20registration!%20https://hackathon.a2sv.org"),
              (this.linkedinSharingLink =
                "https://www.linkedin.com/sharing/share-offsite/?url=https://res.cloudinary.com/eskalate/image/upload/v1718181258/Hackathon-2024/Hackathon_Registration_Card.png&summary=I've%20just%20registered%20for%20the%20A2SV%20Hackathon!%20Join%20me%20and%20share%20your%20own%20registration!%20https://hackathon.a2sv.org"),
              (this.twitterSharingLink =
                "https://twitter.com/intent/tweet?url=https://res.cloudinary.com/eskalate/image/upload/v1718181258/Hackathon-2024/Hackathon_Registration_Card.png&text=I've%20just%20registered%20for%20the%20A2SV%20Hackathon!%20Join%20me%20and%20share%20your%20own%20registration!%20https://hackathon.a2sv.org"),
              (this.facebookSharingLink =
                "https://www.facebook.com/sharer/sharer.php?u=https://res.cloudinary.com/eskalate/image/upload/v1718181258/Hackathon-2024/Hackathon_Registration_Card.png&t=I've%20just%20registered%20for%20the%20A2SV%20Hackathon!%20Join%20me%20and%20share%20your%20own%20registration!%20https://hackathon.a2sv.org"),
              (this.instagramSharingLink =
                "https://www.instagram.com/?url=https://res.cloudinary.com/eskalate/image/upload/v1718181258/Hackathon-2024/Hackathon_Registration_Card.png&text=I've%20just%20registered%20for%20the%20A2SV%20Hackathon!%20Join%20me%20and%20share%20your%20own%20registration!%20https://hackathon.a2sv.org"),
              (this.buttonText = "Copy Text"),
              (this.isButtonDisabled = !1),
              (this.buttonClass = "btn bg-purple-700 mt-4");
          }
          ngOnChanges() {
            this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
              this.registrationLink
            );
          }
          getSafeRegistrationLink() {
            return this.sanitizer.bypassSecurityTrustResourceUrl(
              this.registrationLink
            );
          }
          setActiveButton(t, o) {
            window.open(o, "_blank");
          }
          closeModal() {
            this.closeModalEvent.emit(),
              (this.isIframeLoading = !0),
              window.document.getElementById("share_modal")?.showModal(),
              (this.showShareModal = !0);
          }
          closeForReal() {
            window.document.getElementById("share_modal")?.close(),
              (this.showShareModal = !1);
          }
          onIframeLoad() {
            this.isIframeLoading = !1;
          }
          copyText() {
            const t = document.getElementById("shareText");
            t &&
              navigator.clipboard
                .writeText(t.value)
                .then(() => {
                  (this.buttonText = "Text is copied"),
                    (this.isButtonDisabled = !0),
                    (this.buttonClass = "btn mt-4 bg-purple-300"),
                    setTimeout(() => {
                      (this.buttonText = "Copy Text"),
                        (this.isButtonDisabled = !1),
                        (this.buttonClass = "btn bg-purple-700 mt-4");
                    }, 5e3);
                })
                .catch((o) => {
                  console.error("Failed to copy text: ", o);
                });
          }
          static #e = (this.ɵfac = function (o) {
            return new (o || i)(e.Y36(g.H7));
          });
          static #t = (this.ɵcmp = e.Xpm({
            type: i,
            selectors: [["app-registration"]],
            inputs: {
              showModal: "showModal",
              registrationLink: "registrationLink",
              comingName: "comingName",
            },
            outputs: { closeModalEvent: "closeModalEvent" },
            features: [e.TTD],
            decls: 34,
            vars: 5,
            consts: [
              [
                "class",
                "backdrop-blur   overflow-x-hidden max-sm:p-5 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex",
                4,
                "ngIf",
              ],
              ["id", "share_modal", 1, "modal", "mt-4"],
              [
                "method",
                "dialog",
                1,
                "modal-box",
                "w-11/12",
                "max-sm:w-full",
                "max-sm:mx-2",
                "max-w-7xl",
                "min-h-8xl",
                "bg-gray-900",
              ],
              [
                1,
                "text-gray-400",
                "bg-gray-900",
                "body-font",
                "h-[70vh]",
                "flex",
                "items-center",
                "justify-center",
              ],
              [1, "container", "p-4", "flex", "justify-center", "items-center"],
              [
                1,
                "grid",
                "grid-cols-1",
                "md:grid-cols-5",
                "justify-center",
                "items-center",
                "w-full",
              ],
              [
                1,
                "rounded-xl",
                "overflow-hidden",
                "md:col-span-3",
                "h-full",
                "w-full",
                "bg-opacity-40",
                "relative",
              ],
              [
                "src",
                "https://res.cloudinary.com/eskalate/image/upload/v1718181258/Hackathon-2024/Hackathon_Registration_Card.png",
                "alt",
                "Hackathon Attendance",
                1,
                "object-cover",
                "w-full",
                "h-full",
              ],
              [
                1,
                "p-5",
                "md:col-span-2",
                "h-full",
                "w-full",
                "max-md:mt-4",
                "flex",
                "flex-col",
                "items-center",
                "justify-center",
              ],
              [
                1,
                "text-lg",
                "text-gray-100",
                "font-semibold",
                "mb-3",
                "text-center",
              ],
              [
                1,
                "flex",
                "flex-col",
                "items-center",
                "justify-center",
                "w-full",
                "mb-4",
              ],
              [
                "id",
                "shareText",
                1,
                "textarea",
                "textarea-bordered",
                "w-full",
                "h-auto",
              ],
              [3, "disabled", "click"],
              [
                1,
                "inline-flex",
                "max-sm:mb-4",
                "sm:mt-0",
                "gap-x-3",
                "items-center",
                "justify-center",
              ],
              [
                "target",
                "_blank",
                "href",
                "https://t.me/share/url?url=https://res.cloudinary.com/eskalate/image/upload/v1717588776/gallery/Hackathon_Attendance.png&text=I've%20just%20registered%20for%20the%20A2SV%20Hackathon!%20Join%20me%20and%20share%20your%20own%20registration!",
                1,
                "text-gray-100",
                "hover:text-indigo-600",
                "mb-1",
                3,
                "click",
              ],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "fill",
                "currentColor",
                "viewBox",
                "0 0 24 24",
                1,
                "w-4",
                "h-4",
                "sm:w-5",
                "sm:h-5",
              ],
              [
                "d",
                "M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z",
              ],
              [
                "target",
                "_blank",
                "href",
                "https://www.facebook.com/sharer/sharer.php?u=https://res.cloudinary.com/eskalate/image/upload/v1717588776/gallery/Hackathon_Attendance.png&quote=I've%20just%20registered%20for%20the%20A2SV%20Hackathon!%20Join%20me%20and%20share%20your%20own%20registration!",
                1,
                "text-gray-100",
                "hover:text-indigo-600",
                "mr-2",
                3,
                "click",
              ],
              [
                "fill",
                "currentColor",
                "stroke-linecap",
                "round",
                "stroke-linejoin",
                "round",
                "stroke-width",
                "2",
                "viewBox",
                "0 0 24 24",
                1,
                "w-4",
                "h-4",
                "sm:w-5",
                "sm:h-5",
              ],
              [
                "d",
                "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
              ],
              [
                "target",
                "_blank",
                "href",
                "https://twitter.com/intent/tweet?url=https://res.cloudinary.com/eskalate/image/upload/v1717588776/gallery/Hackathon_Attendance.png&text=I've%20just%20registered%20for%20the%20A2SV%20Hackathon!%20Join%20me%20and%20share%20your%20own%20registration!",
                1,
                "ml-3",
                "text-gray-100",
                "hover:text-indigo-600",
                3,
                "click",
              ],
              [
                "viewBox",
                "0 0 300 300",
                "fill",
                "currentColor",
                "xmlns",
                "http://www.w3.org/2000/svg",
                1,
                "w-3",
                "h-3",
                "sm:w-4",
                "sm:h-4",
              ],
              [
                "d",
                "M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66",
              ],
              [
                "target",
                "_blank",
                "href",
                "https://www.linkedin.com/sharing/share-offsite/?url=https://res.cloudinary.com/eskalate/image/upload/v1717588776/gallery/Hackathon_Attendance.png",
                1,
                "ml-3",
                "text-gray-100",
                "hover:text-indigo-600",
                3,
                "click",
              ],
              [
                "fill",
                "currentColor",
                "stroke",
                "currentColor",
                "stroke-linecap",
                "round",
                "stroke-linejoin",
                "round",
                "stroke-width",
                "0",
                "viewBox",
                "0 0 24 24",
                1,
                "w-4",
                "h-4",
                "sm:w-5",
                "sm:h-5",
              ],
              [
                "stroke",
                "none",
                "d",
                "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
              ],
              ["cx", "4", "cy", "4", "r", "2", "stroke", "none"],
              [1, "modal-action"],
              [1, "btn", 3, "click"],
              [
                1,
                "backdrop-blur",
                "overflow-x-hidden",
                "max-sm:p-5",
                "overflow-y-auto",
                "fixed",
                "inset-0",
                "z-50",
                "outline-none",
                "focus:outline-none",
                "justify-center",
                "items-center",
                "flex",
              ],
              [
                1,
                "relative",
                "max-md:hidden",
                "w-full",
                "mt-8",
                "max-w-6xl",
                "max-h-full",
                "flex",
                "flex-col",
                "rounded-3xl",
                "bg-black",
                "justify-center",
                "items-center",
              ],
              [
                1,
                "absolute",
                "right-0",
                "top-0",
                "mt-4",
                "mr-4",
                "text-3xl",
                "font-semibold",
                "leading-none",
                "text-gray-600",
                "outline-none",
                "focus:outline-none",
                3,
                "click",
              ],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "viewBox",
                "0 0 24 24",
                "fill",
                "currentColor",
                1,
                "w-8",
                "h-8",
              ],
              [
                "fill-rule",
                "evenodd",
                "d",
                "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",
                "clip-rule",
                "evenodd",
              ],
              [
                1,
                "w-full",
                "rounded-3xl",
                "aspect-video",
                "bg-black",
                3,
                "src",
                "load",
                "error",
              ],
              [1, "flex", "absolute", "items-center", "justify-center"],
              [
                "class",
                "animate-spin  rounded-full h-32 w-32 max-sm:h-16 max-sm:w-16 border-t-2 border-b-2 border-indigo-700 ",
                4,
                "ngIf",
              ],
              [
                "role",
                "dialog",
                "aria-modal",
                "true",
                1,
                "relative",
                "md:hidden",
                "text-white",
              ],
              [
                1,
                "fixed",
                "inset-y-0",
                "right-0",
                "z-50",
                "w-full",
                "overflow-y-auto",
                "bg-black",
                "overflow-x-hidden",
                "sm:max-w-sm",
                "sm:ring-1",
                "sm:ring-gray-900/10",
              ],
              [
                "type",
                "button",
                1,
                "-m-2.5",
                "absolute",
                "top-2",
                "right-2",
                "rounded-md",
                "p-2.5",
                "text-gray-300",
                3,
                "click",
              ],
              [1, "sr-only"],
              [1, "w-full", "h-full", "bg-black", 3, "src", "load", "error"],
              [
                1,
                "flex",
                "max-md:hidden",
                "absolute",
                "items-center",
                "justify-center",
              ],
              [
                1,
                "animate-spin",
                "rounded-full",
                "h-32",
                "w-32",
                "max-sm:h-16",
                "max-sm:w-16",
                "border-t-2",
                "border-b-2",
                "border-indigo-700",
              ],
            ],
            template: function (o, n) {
              1 & o &&
                (e.TgZ(0, "section"),
                e.YNc(1, G, 18, 4, "div", 0),
                e.TgZ(2, "dialog", 1)(3, "form", 2)(4, "section", 3)(
                  5,
                  "div",
                  4
                )(6, "div", 5)(7, "div", 6),
                e._UZ(8, "img", 7),
                e.qZA(),
                e.TgZ(9, "div", 8)(10, "h3", 9),
                e._uU(
                  11,
                  "Congrats on registering!\u{1f389} Share this moment with your friends! Copy the text below and spread the word on your social media using the respective buttons provided."
                ),
                e.qZA(),
                e.TgZ(12, "div", 10)(13, "textarea", 11),
                e._uU(
                  14,
                  "I've just registered for the A2SV Hackathon! Join me and be part of this hackathon! https://hackathon.a2sv.org"
                ),
                e.qZA(),
                e.TgZ(15, "button", 12),
                e.NdJ("click", function () {
                  return n.copyText();
                }),
                e._uU(16),
                e.qZA()(),
                e.TgZ(17, "span", 13)(18, "a", 14),
                e.NdJ("click", function () {
                  return n.setActiveButton("telegram", n.telegramSharingLink);
                }),
                e.O4$(),
                e.TgZ(19, "svg", 15),
                e._UZ(20, "path", 16),
                e.qZA()(),
                e.kcU(),
                e.TgZ(21, "a", 17),
                e.NdJ("click", function () {
                  return n.setActiveButton("facebook", n.facebookSharingLink);
                }),
                e.O4$(),
                e.TgZ(22, "svg", 18),
                e._UZ(23, "path", 19),
                e.qZA()(),
                e.kcU(),
                e.TgZ(24, "a", 20),
                e.NdJ("click", function () {
                  return n.setActiveButton("twitter", n.twitterSharingLink);
                }),
                e.O4$(),
                e.TgZ(25, "svg", 21),
                e._UZ(26, "path", 22),
                e.qZA()(),
                e.kcU(),
                e.TgZ(27, "a", 23),
                e.NdJ("click", function () {
                  return n.setActiveButton("linkedin", n.linkedinSharingLink);
                }),
                e.O4$(),
                e.TgZ(28, "svg", 24),
                e._UZ(29, "path", 25)(30, "circle", 26),
                e.qZA()()()()()()(),
                e.kcU(),
                e.TgZ(31, "div", 27)(32, "button", 28),
                e.NdJ("click", function () {
                  return n.closeForReal();
                }),
                e._uU(33, "Close"),
                e.qZA()()()()()),
                2 & o &&
                  (e.xp6(1),
                  e.Q6J("ngIf", n.showModal),
                  e.xp6(14),
                  e.Tol(n.buttonClass),
                  e.Q6J("disabled", n.isButtonDisabled),
                  e.xp6(1),
                  e.Oqu(n.buttonText));
            },
            dependencies: [s.O5],
          }));
        }
        return i;
      })();
      var _ = c(6825);
      function $(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 8)(1, "p", 9),
            e._uU(2, " Are you registering as an individual or as a team? "),
            e.qZA(),
            e.TgZ(3, "div", 10)(4, "button", 11),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.selectRegistrationType("individual"));
            }),
            e._uU(5, " Individual "),
            e.qZA(),
            e.TgZ(6, "button", 12),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.selectRegistrationType("team"));
            }),
            e._uU(7, " Team "),
            e.qZA()()();
        }
      }
      function W(i, r) {
        1 & i && (e.O4$(), e.TgZ(0, "svg", 24), e._UZ(1, "path", 25), e.qZA());
      }
      function K(i, r) {
        1 & i && (e.O4$(), e.TgZ(0, "svg", 26), e._UZ(1, "path", 27), e.qZA());
      }
      function X(i, r) {
        1 & i && (e.O4$(), e.TgZ(0, "svg", 28), e._UZ(1, "path", 29), e.qZA());
      }
      function ee(i, r) {
        if (
          (1 & i && (e.TgZ(0, "div", 30)(1, "p", 31), e._uU(2), e.qZA()()),
          2 & i)
        ) {
          const t = e.oxw().$implicit;
          e.xp6(1),
            e.Q6J("@fadeInOut", void 0),
            e.xp6(1),
            e.hij(" ", t.text, " ");
        }
      }
      function te(i, r) {
        1 & i && e._UZ(0, "hr", 32);
      }
      function ie(i, r) {
        if (
          (1 & i &&
            (e.TgZ(0, "li")(1, "div", 17)(2, "div", 18),
            e.YNc(3, W, 2, 0, "svg", 19)(4, K, 2, 0, "svg", 20)(
              5,
              X,
              2,
              0,
              "svg",
              21
            ),
            e.qZA(),
            e.YNc(6, ee, 3, 2, "div", 22),
            e.qZA(),
            e.YNc(7, te, 1, 0, "hr", 23),
            e.qZA()),
          2 & i)
        ) {
          const t = r.$implicit,
            o = r.index,
            n = e.oxw(2);
          e.xp6(3),
            e.Q6J("ngIf", null === t.answered && o <= n.currentQuestionIndex),
            e.xp6(1),
            e.Q6J("ngIf", !0 === t.answered),
            e.xp6(1),
            e.Q6J("ngIf", !1 === t.answered),
            e.xp6(1),
            e.Q6J("ngIf", o <= n.currentQuestionIndex),
            e.xp6(1),
            e.Q6J("ngIf", null !== t.answered);
        }
      }
      function ne(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 10)(1, "button", 33),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw(2);
              return e.KtG(n.answerYes());
            }),
            e._uU(2, " Yes "),
            e.qZA(),
            e.TgZ(3, "button", 34),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw(2);
              return e.KtG(n.answerNo());
            }),
            e._uU(4, " No "),
            e.qZA()();
        }
      }
      function oe(i, r) {
        1 & i &&
          (e.TgZ(0, "div", 8)(1, "p", 35),
          e._uU(2, " Congratulations! You are eligible to register. "),
          e.qZA(),
          e.TgZ(3, "p", 36),
          e._uU(
            4,
            " Proceed to register individually or as a team and join the A2SV AI for Africa Hackathon. "
          ),
          e.qZA()());
      }
      function re(i, r) {
        1 & i &&
          (e.TgZ(0, "div", 8)(1, "p", 37),
          e._uU(
            2,
            " Unfortunately, you are not eligible to register for the hackathon at this time. "
          ),
          e.qZA()());
      }
      const ae = (i, r) => ({ "bg-purple-700": i, "bg-green-700": r });
      function se(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div")(1, "div", 13)(2, "button", 14),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.switchRegistrationType());
            }),
            e._uU(3),
            e.qZA()(),
            e.TgZ(4, "div")(5, "ul"),
            e.YNc(6, ie, 8, 5, "li", 15),
            e.qZA(),
            e.YNc(7, ne, 5, 0, "div", 16)(8, oe, 5, 0, "div", 6)(
              9,
              re,
              3,
              0,
              "div",
              6
            ),
            e.qZA()();
        }
        if (2 & i) {
          const t = e.oxw();
          e.xp6(2),
            e.Q6J("ngClass", e.WLB(6, ae, t.isIndividual, !t.isIndividual)),
            e.xp6(1),
            e.hij(
              " ",
              t.isIndividual ? "Switch to Team" : "Switch to Individual",
              " "
            ),
            e.xp6(3),
            e.Q6J("ngForOf", t.criteria),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              !t.eligibilityConfirmed &&
                !t.ineligible &&
                t.currentQuestionIndex < t.criteria.length
            ),
            e.xp6(1),
            e.Q6J("ngIf", t.eligibilityConfirmed),
            e.xp6(1),
            e.Q6J("ngIf", t.ineligible);
        }
      }
      function le(i, r) {
        1 & i &&
          (e.TgZ(0, "p", 41),
          e._uU(1, " Sorry, you are not eligible to participate. "),
          e.qZA());
      }
      function ce(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div"),
            e.YNc(1, le, 2, 0, "p", 38),
            e.TgZ(2, "button", 39),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.resetEligibility());
            }),
            e._UZ(3, "img", 40),
            e.qZA()();
        }
        if (2 & i) {
          const t = e.oxw();
          e.xp6(1), e.Q6J("ngIf", t.ineligible);
        }
      }
      let de = (() => {
        class i {
          constructor(t) {
            (this.registerService = t),
              (this.openChatEvent = new e.vpe()),
              (this.registrationDeadline = new Date(2023, 7, 31, 23, 59, 59)),
              (this.isIndividual = !0),
              (this.registrationButtonVisible = !0),
              (this.criterieas = [
                {
                  text: "Every team must have a minimum of 3 members and a maximum of 5 members.",
                },
                { text: "Every team member must be located in Africa." },
                {
                  text: "All team members must be students currently enrolled in a University, College (undergrad, Associate, Diploma program), or High School, with a graduation year after January 2024. Students currently pursuing or who have completed a Master's degree or higher are not eligible to participate.",
                },
                {
                  text: "If you don't have a team you can register individually and we'll match you with other talented developers, designers, and problem solvers.",
                },
              ]),
              (this.individualCriteria = [
                {
                  text: "Are you currently studying or have you completed your studies in a University, College (undergraduate, Associate, or Diploma program), or High School in Africa?",
                  answered: null,
                },
                {
                  text: "Is your graduation year after January 2024?",
                  answered: null,
                },
                {
                  text: "Are you already in a team of 4 - 5 or are you willing to be grouped into teams by the organizers?",
                  answered: null,
                },
              ]),
              (this.teamCriteria = [
                {
                  text: "Are all of your team members currently studying or have completed their studies in a University, College (undergraduate, Associate, or Diploma program), or High School in Africa?",
                  answered: null,
                },
                {
                  text: "Are the graduation years of all team members after January 2024?",
                  answered: null,
                },
                {
                  text: "Is each team member registered only to one team?",
                  answered: null,
                },
                { text: "Does your team have 3 to 5 members?", answered: null },
              ]),
              (this.criteria = this.individualCriteria),
              (this.currentQuestionIndex = 0),
              (this.eligibilityConfirmed = !1),
              (this.ineligible = !1),
              (this.registrationTypeSelected = !1);
          }
          ngOnInit() {
            this.registerService.registrationType$.subscribe((t) => {
              t &&
                ((this.isIndividual = "individual" === t),
                (this.criteria = this.isIndividual
                  ? this.individualCriteria
                  : this.teamCriteria));
            }),
              setInterval(() => {
                this.updateRegistrationButtonVisibility();
              }, 1e3);
          }
          checkEligibility() {
            this.registerService.openModal();
          }
          updateRegistrationButtonVisibility() {
            this.registrationButtonVisible =
              new Date() < this.registrationDeadline;
          }
          openChat() {
            this.openChatEvent.emit();
          }
          selectRegistrationType(t) {
            (this.registrationTypeSelected = !0),
              (this.isIndividual = "individual" === t),
              (this.criteria = this.isIndividual
                ? this.individualCriteria
                : this.teamCriteria),
              this.resetEligibility(),
              this.registerService.setRegistrationType(t);
          }
          switchRegistrationType() {
            (this.isIndividual = !this.isIndividual),
              (this.criteria = this.isIndividual
                ? this.individualCriteria
                : this.teamCriteria),
              this.resetEligibility(),
              this.registerService.setRegistrationType(
                this.isIndividual ? "individual" : "team"
              );
          }
          resetEligibility() {
            (this.currentQuestionIndex = 0),
              (this.eligibilityConfirmed = !1),
              (this.ineligible = !1),
              (this.registrationButtonVisible = !1),
              this.criteria.forEach((t) => (t.answered = null));
          }
          answerYes() {
            (this.criteria[this.currentQuestionIndex].answered = !0),
              this.currentQuestionIndex++,
              this.currentQuestionIndex >= this.criteria.length &&
                ((this.eligibilityConfirmed = !0),
                (this.registrationButtonVisible = !0),
                this.registerService.checkEligibility());
          }
          answerNo() {
            (this.criteria[this.currentQuestionIndex].answered = !1),
              (this.ineligible = !0);
          }
          static #e = (this.ɵfac = function (o) {
            return new (o || i)(e.Y36(v));
          });
          static #t = (this.ɵcmp = e.Xpm({
            type: i,
            selectors: [["app-eligibility"]],
            outputs: { openChatEvent: "openChatEvent" },
            decls: 11,
            vars: 3,
            consts: [
              [
                "id",
                "eligibility",
                1,
                "max-sm:px-4",
                "px-5",
                "py-6",
                "overflow-x-hidden",
                "flex",
                "flex-col",
                "justify-center",
                "items-center",
              ],
              [1, "max-w-6xl"],
              [
                1,
                "sm:text-4xl",
                "text-center",
                "text-2xl",
                "font-medium",
                "mb-4",
                "text-white",
              ],
              [1, "p-2", "flex", "flex-col", "justify-center", "items-center"],
              [
                1,
                "flex-none",
                "max-lg:my-6",
                "sm:pb-8",
                "md:mx-8",
                "sm:mt-0",
                "sm:text-left",
              ],
              [1, "text-gray-300", "leading-relaxed", "text-center"],
              ["class", "text-center mt-4", 4, "ngIf"],
              [4, "ngIf"],
              [1, "text-center", "mt-4"],
              [1, "text-gray-400", "gradient-text", "text-lg"],
              [1, "flex", "justify-center", "mt-4"],
              [
                1,
                "inline-flex",
                "text-white",
                "border-0",
                "bg-purple-700",
                "py-2",
                "px-4",
                "rounded-full",
                "focus:outline-none",
                "hover:drop-shadow-xl",
                "text-sm",
                "mr-4",
                3,
                "click",
              ],
              [
                1,
                "inline-flex",
                "text-white",
                "border-0",
                "bg-green-700",
                "py-2",
                "px-4",
                "rounded-full",
                "focus:outline-none",
                "hover:drop-shadow-xl",
                "text-sm",
                3,
                "click",
              ],
              [1, "flex", "justify-center", "mt-6", "mb-5"],
              [
                1,
                "inline-flex",
                "text-white",
                "border-0",
                "max-sm:px-4",
                "py-2",
                "px-6",
                "focus:outline-none",
                "hover:drop-shadow-xl",
                "rounded-full",
                "text-sm",
                3,
                "ngClass",
                "click",
              ],
              [4, "ngFor", "ngForOf"],
              ["class", "flex justify-center mt-4", 4, "ngIf"],
              [1, "flex", "items-start", "py-2"],
              [1, "flex-none", "w-8", "h-8", "mr-5"],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "viewBox",
                "0 0 24 24",
                "fill",
                "none",
                "stroke",
                "currentColor",
                "stroke-width",
                "2",
                "class",
                "w-full h-full text-gray-400",
                4,
                "ngIf",
              ],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "viewBox",
                "0 0 24 24",
                "fill",
                "currentColor",
                "class",
                "w-full h-full text-[#AC6AFF]",
                4,
                "ngIf",
              ],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "viewBox",
                "0 0 24 24",
                "fill",
                "currentColor",
                "class",
                "w-full h-full text-red-500",
                4,
                "ngIf",
              ],
              ["class", "flex-grow", 4, "ngIf"],
              [
                "class",
                "border-t border-white border-opacity-30 mb-2",
                4,
                "ngIf",
              ],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "viewBox",
                "0 0 24 24",
                "fill",
                "none",
                "stroke",
                "currentColor",
                "stroke-width",
                "2",
                1,
                "w-full",
                "h-full",
                "text-gray-400",
              ],
              ["d", "M5 12h14M12 5l7 7-7 7"],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "viewBox",
                "0 0 24 24",
                "fill",
                "currentColor",
                1,
                "w-full",
                "h-full",
                "text-[#AC6AFF]",
              ],
              [
                "fill-rule",
                "evenodd",
                "d",
                "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
                "clip-rule",
                "evenodd",
              ],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "viewBox",
                "0 0 24 24",
                "fill",
                "currentColor",
                1,
                "w-full",
                "h-full",
                "text-red-500",
              ],
              [
                "fill-rule",
                "evenodd",
                "d",
                "M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5zM9.47 9.47a.75.75 0 011.06-1.06l1.47 1.47 1.47-1.47a.75.75 0 011.06 1.06L12.53 12l1.47 1.47a.75.75 0 01-1.06 1.06l-1.47-1.47-1.47 1.47a.75.75 0 01-1.06-1.06L11.47 12 9.47 10.53z",
                "clip-rule",
                "evenodd",
              ],
              [1, "flex-grow"],
              [1, "text-gray-300", "leading-relaxed", "text-start"],
              [1, "border-t", "border-white", "border-opacity-30", "mb-2"],
              [
                1,
                "inline-flex",
                "text-white",
                "border-0",
                "bg-green-500",
                "py-2",
                "px-4",
                "rounded-full",
                "focus:outline-none",
                "hover:drop-shadow-xl",
                "text-sm",
                "mr-4",
                3,
                "click",
              ],
              [
                1,
                "inline-flex",
                "text-white",
                "border-0",
                "bg-red-500",
                "py-2",
                "px-4",
                "rounded-full",
                "focus:outline-none",
                "hover:drop-shadow-xl",
                "text-sm",
                3,
                "click",
              ],
              [1, "text-green-500", "font-bold"],
              [1, "text-gray-400"],
              [1, "text-red-500", "font-bold"],
              [
                "class",
                "text-gray-300 leading-relaxed max-sm:text-start mt-6",
                4,
                "ngIf",
              ],
              [
                1,
                "flex",
                "items-center",
                "transition-all",
                "cursor-pointer",
                "ease-out",
                "duration-400",
                "bg-purple-700",
                "hover:bg-purple-500",
                "relative",
                "disabled:bg-gray-500",
                "text-white",
                "border-0",
                "max-sm:px-4",
                "py-2",
                "px-5",
                "focus:outline-none",
                "hover:drop-shadow-xl",
                "rounded-full",
                "max-sm:text-sm",
                "text-lg",
                "group",
                3,
                "click",
              ],
              ["src", "assets/loopIcon.svg", 1, "w-8", "h-8"],
              [
                1,
                "text-gray-300",
                "leading-relaxed",
                "max-sm:text-start",
                "mt-6",
              ],
            ],
            template: function (o, n) {
              1 & o &&
                (e.TgZ(0, "section", 0)(1, "div", 1)(2, "p", 2),
                e._uU(3, " Eligibility "),
                e.qZA(),
                e.TgZ(4, "div", 3)(5, "div", 4)(6, "p", 5),
                e._uU(
                  7,
                  " The A2SV Hackathon is currently at the semi-final stage. To participate in future events, students across Africa who are passionate about AI and eager to showcase their skills and creativity should meet the following eligibility requirements: "
                ),
                e.qZA(),
                e.YNc(8, $, 8, 0, "div", 6)(9, se, 10, 9, "div", 7)(
                  10,
                  ce,
                  4,
                  1,
                  "div",
                  7
                ),
                e.qZA()()()()),
                2 & o &&
                  (e.xp6(8),
                  e.Q6J("ngIf", !n.registrationTypeSelected),
                  e.xp6(1),
                  e.Q6J("ngIf", n.registrationTypeSelected),
                  e.xp6(1),
                  e.Q6J("ngIf", n.ineligible));
            },
            dependencies: [s.mk, s.sg, s.O5],
            styles: [
              "stack[_ngcontent-%COMP%]{display:inline-grid;place-items:center;align-items:flex-end}.stack[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{grid-column-start:1;grid-row-start:1;transform:translate(10%) scale(.9);z-index:1;width:100%;opacity:.6}.stack[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-child(2){transform:translate(5%) scale(.95);z-index:2;opacity:.8}.stack[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-child(1){transform:translate(0) scale(1);z-index:3;opacity:1}.gradient-text[_ngcontent-%COMP%]{background:linear-gradient(45deg,#ffdf00,#ff7f50,#00fa9a,#00bfff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent;animation:_ngcontent-%COMP%_gradientAnimation 8s ease infinite}@keyframes _ngcontent-%COMP%_gradientAnimation{0%{background-position:0% 50%}50%{background-position:100% 50%}to{background-position:0% 50%}}",
            ],
            data: {
              animation: [
                (0, _.X$)("fadeInOut", [
                  (0, _.eR)(":enter", [
                    (0, _.oB)({ opacity: 0 }),
                    (0, _.jt)("500ms ease-in", (0, _.oB)({ opacity: 1 })),
                  ]),
                ]),
              ],
            },
          }));
        }
        return i;
      })();
      function ge(i, r) {
        1 & i && (e.TgZ(0, "div", 10), e._UZ(1, "app-eligibility"), e.qZA());
      }
      function ue(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 11)(1, "div", 12)(2, "div")(3, "p", 13),
            e._uU(
              4,
              " Don't have a team yet? Register individually and we'll match you with other talented developers, designers, and problem solvers. "
            ),
            e.qZA()(),
            e.TgZ(5, "div", 14)(6, "a", 15),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.onRegisterIndividual());
            }),
            e._UZ(7, "span", 16),
            e.TgZ(8, "span", 17),
            e._uU(9, "Register Individually"),
            e.qZA()()()()();
        }
      }
      function pe(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 11)(1, "div", 12)(2, "div")(3, "p", 13),
            e._uU(
              4,
              " Already have a team? If you are the captain, register your team and start working on your project today. "
            ),
            e.qZA()(),
            e.TgZ(5, "div", 18)(6, "a", 19),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.onRegisterTeam());
            }),
            e._UZ(7, "span", 16),
            e.TgZ(8, "span", 17),
            e._uU(9, "Register as a Team"),
            e.qZA()()()()();
        }
      }
      let I = (() => {
        class i {
          constructor(t) {
            (this.registerService = t),
              (this.isModalOpen = !1),
              (this.isEligibilityChecked = !1),
              (this.registrationType = null),
              (this.currentSection = "home"),
              (this.toggleChatEvent = new e.vpe()),
              (this.showTeamRegistrationModal = !1),
              (this.showIndividualRegistrationModal = !1),
              (this.showRegistrationModal = !0),
              (this.showModal = !1),
              (this.teamRegistrationLink =
                "https://a2sv.typeform.com/to/qtKuYH58"),
              (this.indivisualRegistrationLink =
                "https://a2sv.typeform.com/to/yxMUctSN"),
              (this.individualName = "individual"),
              (this.teamName = "team"),
              (this.showEligibilitySection = !1);
          }
          ngOnInit() {
            (this.modalSubscription = this.registerService.modalOpen$.subscribe(
              (t) => {
                this.isModalOpen = t;
                const o = document.getElementById("register_service_modal");
                o && (this.isModalOpen ? o.showModal() : o.close());
              }
            )),
              (this.eligibilitySubscription =
                this.registerService.eligibilityChecked$.subscribe((t) => {
                  this.isEligibilityChecked = t;
                })),
              (this.showEligibilitySubscription =
                this.registerService.showEligibility$.subscribe((t) => {
                  this.showEligibilitySection = t;
                })),
              (this.registrationTypeSubscription =
                this.registerService.registrationType$.subscribe((t) => {
                  this.registrationType = t;
                }));
          }
          ngOnDestroy() {
            this.modalSubscription.unsubscribe(),
              this.eligibilitySubscription.unsubscribe(),
              this.showEligibilitySubscription.unsubscribe(),
              this.registrationTypeSubscription.unsubscribe();
          }
          closeModal() {
            this.registerService.closeModal();
          }
          onRegisterIndividual() {
            this.closeModal(),
              this.toggleChatEvent.emit(!1),
              (this.showIndividualRegistrationModal = !0),
              (this.showRegistrationModal = !1),
              document.body.classList.add("overflow-hidden", "z-0"),
              document.getElementById("prizes")?.classList.add("z-0"),
              document.getElementById("prizes")?.classList.remove("z-40"),
              document.getElementById("partners")?.classList.add("hidden"),
              document.getElementById("info")?.classList.add("hidden"),
              document.getElementById("judges")?.classList.add("hidden"),
              document.getElementById("eligibility")?.classList.add("hidden"),
              document.getElementById("about-us")?.classList.add("hidden"),
              document.getElementById("footer")?.classList.add("hidden");
          }
          onRegisterTeam() {
            this.closeModal(),
              this.toggleChatEvent.emit(!1),
              (this.showTeamRegistrationModal = !0),
              (this.showRegistrationModal = !1),
              document.body.classList.add("overflow-hidden", "z-0"),
              document.getElementById("prizes")?.classList.add("z-0"),
              document.getElementById("prizes")?.classList.remove("z-40"),
              document.getElementById("partners")?.classList.add("hidden"),
              document.getElementById("partners")?.classList.add("hidden"),
              document.getElementById("info")?.classList.add("hidden"),
              document.getElementById("judges")?.classList.add("hidden"),
              document.getElementById("eligibility")?.classList.add("hidden"),
              document.getElementById("about-us")?.classList.add("hidden"),
              document.getElementById("footer")?.classList.add("hidden");
          }
          onHideModal() {
            this.toggleChatEvent.emit(!0),
              (this.showModal = !1),
              (this.showRegistrationModal = !0),
              (this.showTeamRegistrationModal = !1),
              (this.showIndividualRegistrationModal = !1),
              document.body.classList.remove("overflow-hidden", "z-0"),
              document.getElementById("prizes")?.classList.remove("z-0"),
              document.getElementById("prizes")?.classList.add("z-40"),
              document.getElementById("partners")?.classList.remove("hidden"),
              document.getElementById("info")?.classList.remove("hidden"),
              document.getElementById("judges")?.classList.remove("hidden"),
              document
                .getElementById("eligibility")
                ?.classList.remove("hidden"),
              document.getElementById("about-us")?.classList.remove("hidden"),
              document.getElementById("footer")?.classList.remove("hidden");
          }
          showEligibility() {
            this.registerService.showEligibility();
          }
          navigateToEligibility() {
            this.showEligibility();
          }
          scrollToSection(t) {
            this.currentSection = t;
            const o = !document.body.classList.contains("overflow-hidden"),
              n = document.getElementById(t);
            null != n && o && n.scrollIntoView({ behavior: "smooth" });
          }
          registerIndividual() {}
          registerTeam() {}
          static #e = (this.ɵfac = function (o) {
            return new (o || i)(e.Y36(v));
          });
          static #t = (this.ɵcmp = e.Xpm({
            type: i,
            selectors: [["app-register-modal"]],
            inputs: { currentSection: "currentSection" },
            outputs: { toggleChatEvent: "toggleChatEvent" },
            standalone: !0,
            features: [e.jDz],
            decls: 14,
            vars: 9,
            consts: [
              ["id", "register_service_modal", 1, "modal", "mt-4"],
              [
                "method",
                "dialog",
                1,
                "modal-box",
                "w-11/12",
                "max-sm:w-full",
                "max-sm:mx-2",
                "max-w-5xl",
                "bg-gray-900",
              ],
              [1, "text-gray-400", "bg-gray-900", "body-font"],
              [1, "container", "p-4"],
              [1, "flex", "flex-wrap", "justify-center", "-m-4"],
              ["class", "p-4 w-full", 4, "ngIf"],
              ["class", "p-4 lg:w-1/3", 4, "ngIf"],
              [1, "modal-action"],
              ["type", "button", 1, "btn", 3, "click"],
              [
                3,
                "comingName",
                "showModal",
                "registrationLink",
                "closeModalEvent",
              ],
              [1, "p-4", "w-full"],
              [1, "p-4", "lg:w-1/3"],
              [
                1,
                "h-full",
                "flex",
                "flex-col",
                "justify-between",
                "bg-gray-800",
                "bg-opacity-40",
                "px-8",
                "py-8",
                "rounded-lg",
                "overflow-hidden",
                "relative",
              ],
              [1, "leading-relaxed", "mb-3"],
              [
                1,
                "flex",
                "w-full",
                "flex-wrap",
                "space-y-4",
                "justify-center",
                "items-end",
              ],
              [
                1,
                "rounded-full",
                "cursor-pointer",
                "modal-action",
                "px-5",
                "py-2.5",
                "overflow-hidden",
                "group",
                "bg-gradient-to-r",
                "from-indigo-600",
                "to-pink-500",
                "relative",
                "hover:bg-gradient-to-r",
                "hover:from-indigo-600",
                "hover:to-pink-500",
                "text-white",
                "transition-all",
                "ease-out",
                "duration-300",
                3,
                "click",
              ],
              [
                1,
                "absolute",
                "right-0",
                "w-8",
                "h-32",
                "-mt-12",
                "transition-all",
                "duration-1000",
                "transform",
                "translate-x-12",
                "bg-white",
                "opacity-10",
                "rotate-12",
                "group-hover:-translate-x-40",
                "ease",
              ],
              [1, "relative"],
              [
                1,
                "flex",
                "w-full",
                "flex-wrap",
                "space-y-4",
                "justify-center",
                "items-end",
                "modal-action",
              ],
              [
                1,
                "rounded-full",
                "cursor-pointer",
                "px-5",
                "py-2.5",
                "overflow-hidden",
                "group",
                "bg-gradient-to-r",
                "from-indigo-600",
                "to-pink-500",
                "relative",
                "hover:bg-gradient-to-r",
                "hover:from-indigo-600",
                "hover:to-pink-500",
                "text-white",
                "transition-all",
                "ease-out",
                "duration-300",
                3,
                "click",
              ],
            ],
            template: function (o, n) {
              1 & o &&
                (e.TgZ(0, "div")(1, "dialog", 0)(2, "form", 1)(3, "section", 2)(
                  4,
                  "div",
                  3
                )(5, "div", 4),
                e.YNc(6, ge, 2, 0, "div", 5)(7, ue, 10, 0, "div", 6)(
                  8,
                  pe,
                  10,
                  0,
                  "div",
                  6
                ),
                e.qZA()()(),
                e.TgZ(9, "div", 7)(10, "button", 8),
                e.NdJ("click", function () {
                  return n.closeModal();
                }),
                e._uU(11, "Close"),
                e.qZA()()()(),
                e.TgZ(12, "app-registration", 9),
                e.NdJ("closeModalEvent", function () {
                  return n.onHideModal();
                }),
                e.qZA(),
                e.TgZ(13, "app-registration", 9),
                e.NdJ("closeModalEvent", function () {
                  return n.onHideModal();
                }),
                e.qZA()()),
                2 & o &&
                  (e.xp6(6),
                  e.Q6J(
                    "ngIf",
                    !n.isEligibilityChecked && n.showEligibilitySection
                  ),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    n.isEligibilityChecked &&
                      "individual" === n.registrationType
                  ),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    n.isEligibilityChecked && "team" === n.registrationType
                  ),
                  e.xp6(4),
                  e.Q6J("comingName", n.individualName)(
                    "showModal",
                    n.showIndividualRegistrationModal
                  )("registrationLink", n.indivisualRegistrationLink),
                  e.xp6(1),
                  e.Q6J("comingName", n.teamName)(
                    "showModal",
                    n.showTeamRegistrationModal
                  )("registrationLink", n.teamRegistrationLink));
            },
            dependencies: [s.ez, s.O5, S, V, de],
          }));
        }
        return i;
      })();
      function me(i, r) {
        1 & i && e._UZ(0, "div", 15);
      }
      function he(i, r) {
        1 & i && e._UZ(0, "div", 15);
      }
      function fe(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 1)(1, "div", 2)(2, "button", 3),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.closeModal());
            }),
            e.O4$(),
            e.TgZ(3, "svg", 4),
            e._UZ(4, "path", 5),
            e.qZA()(),
            e.kcU(),
            e.TgZ(5, "iframe", 6),
            e.NdJ("load", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.onIframeLoad());
            })("error", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.onIframeLoad());
            }),
            e.qZA(),
            e.TgZ(6, "div", 7),
            e.YNc(7, me, 1, 0, "div", 8),
            e.qZA()(),
            e.TgZ(8, "div", 9)(9, "div", 10)(10, "button", 11),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.closeModal());
            }),
            e.TgZ(11, "span", 12),
            e._uU(12, "Close menu"),
            e.qZA(),
            e.O4$(),
            e.TgZ(13, "svg", 4),
            e._UZ(14, "path", 5),
            e.qZA()(),
            e.kcU(),
            e.TgZ(15, "iframe", 13),
            e.NdJ("load", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.onIframeLoad());
            })("error", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.onIframeLoad());
            }),
            e.qZA(),
            e.TgZ(16, "div", 14),
            e.YNc(17, he, 1, 0, "div", 8),
            e.qZA()()()();
        }
        if (2 & i) {
          const t = e.oxw();
          e.xp6(5),
            e.Q6J("src", t.sanitizedUrl, e.uOi),
            e.xp6(2),
            e.Q6J("ngIf", t.isIframeLoading),
            e.xp6(8),
            e.Q6J("src", t.sanitizedUrl, e.uOi),
            e.xp6(2),
            e.Q6J("ngIf", t.isIframeLoading);
        }
      }
      let z = (() => {
        class i {
          constructor(t) {
            (this.sanitizer = t),
              (this.showModal = !1),
              (this.registrationLink = ""),
              (this.closeModalEvent = new e.vpe()),
              (this.isIframeLoading = !0);
          }
          ngOnChanges() {
            this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
              this.registrationLink
            );
          }
          getSafeRegistrationLink() {
            return this.sanitizer.bypassSecurityTrustResourceUrl(
              this.registrationLink
            );
          }
          closeModal() {
            this.closeModalEvent.emit(), (this.isIframeLoading = !0);
          }
          onIframeLoad() {
            this.isIframeLoading = !1;
          }
          static #e = (this.ɵfac = function (o) {
            return new (o || i)(e.Y36(g.H7));
          });
          static #t = (this.ɵcmp = e.Xpm({
            type: i,
            selectors: [["app-mentors-registration"]],
            inputs: {
              showModal: "showModal",
              registrationLink: "registrationLink",
            },
            outputs: { closeModalEvent: "closeModalEvent" },
            features: [e.TTD],
            decls: 1,
            vars: 1,
            consts: [
              [
                "class",
                "backdrop-blur  overflow-x-hidden max-sm:p-5 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex",
                4,
                "ngIf",
              ],
              [
                1,
                "backdrop-blur",
                "overflow-x-hidden",
                "max-sm:p-5",
                "overflow-y-auto",
                "fixed",
                "inset-0",
                "z-50",
                "outline-none",
                "focus:outline-none",
                "justify-center",
                "items-center",
                "flex",
              ],
              [
                1,
                "relative",
                "max-md:hidden",
                "w-full",
                "mt-8",
                "max-w-6xl",
                "max-h-full",
                "flex",
                "flex-col",
                "rounded-3xl",
                "bg-black",
                "justify-center",
                "items-center",
              ],
              [
                1,
                "absolute",
                "right-0",
                "top-0",
                "mt-4",
                "mr-4",
                "text-3xl",
                "font-semibold",
                "leading-none",
                "text-gray-600",
                "outline-none",
                "focus:outline-none",
                3,
                "click",
              ],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "viewBox",
                "0 0 24 24",
                "fill",
                "currentColor",
                1,
                "w-8",
                "h-8",
              ],
              [
                "fill-rule",
                "evenodd",
                "d",
                "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",
                "clip-rule",
                "evenodd",
              ],
              [
                1,
                "w-full",
                "rounded-3xl",
                "aspect-video",
                "bg-black",
                3,
                "src",
                "load",
                "error",
              ],
              [1, "flex", "absolute", "items-center", "justify-center"],
              [
                "class",
                "animate-spin  rounded-full h-32 w-32 max-sm:h-16 max-sm:w-16 border-t-2 border-b-2 border-indigo-700 ",
                4,
                "ngIf",
              ],
              [
                "role",
                "dialog",
                "aria-modal",
                "true",
                1,
                "relative",
                "md:hidden",
                "text-white",
              ],
              [
                1,
                "fixed",
                "inset-y-0",
                "right-0",
                "z-50",
                "w-full",
                "overflow-y-auto",
                "bg-black",
                "overflow-x-hidden",
                "sm:max-w-sm",
                "sm:ring-1",
                "sm:ring-gray-900/10",
              ],
              [
                "type",
                "button",
                1,
                "-m-2.5",
                "absolute",
                "top-2",
                "right-2",
                "rounded-md",
                "p-2.5",
                "text-gray-300",
                3,
                "click",
              ],
              [1, "sr-only"],
              [1, "w-full", "h-full", "bg-black", 3, "src", "load", "error"],
              [
                1,
                "flex",
                "max-md:hidden",
                "absolute",
                "items-center",
                "justify-center",
              ],
              [
                1,
                "animate-spin",
                "rounded-full",
                "h-32",
                "w-32",
                "max-sm:h-16",
                "max-sm:w-16",
                "border-t-2",
                "border-b-2",
                "border-indigo-700",
              ],
            ],
            template: function (o, n) {
              1 & o && e.YNc(0, fe, 18, 4, "div", 0),
                2 & o && e.Q6J("ngIf", n.showModal);
            },
            dependencies: [s.O5],
          }));
        }
        return i;
      })();
      function _e(i, r) {
        1 & i && e._UZ(0, "div", 15);
      }
      function ve(i, r) {
        1 & i && e._UZ(0, "div", 15);
      }
      function we(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 1)(1, "div", 2)(2, "button", 3),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.closeModal());
            }),
            e.O4$(),
            e.TgZ(3, "svg", 4),
            e._UZ(4, "path", 5),
            e.qZA()(),
            e.kcU(),
            e.TgZ(5, "iframe", 6),
            e.NdJ("load", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.onIframeLoad());
            })("error", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.onIframeLoad());
            }),
            e.qZA(),
            e.TgZ(6, "div", 7),
            e.YNc(7, _e, 1, 0, "div", 8),
            e.qZA()(),
            e.TgZ(8, "div", 9)(9, "div", 10)(10, "button", 11),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.closeModal());
            }),
            e.TgZ(11, "span", 12),
            e._uU(12, "Close menu"),
            e.qZA(),
            e.O4$(),
            e.TgZ(13, "svg", 4),
            e._UZ(14, "path", 5),
            e.qZA()(),
            e.kcU(),
            e.TgZ(15, "iframe", 13),
            e.NdJ("load", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.onIframeLoad());
            })("error", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.onIframeLoad());
            }),
            e.qZA(),
            e.TgZ(16, "div", 14),
            e.YNc(17, ve, 1, 0, "div", 8),
            e.qZA()()()();
        }
        if (2 & i) {
          const t = e.oxw();
          e.xp6(5),
            e.Q6J("src", t.sanitizedUrl, e.uOi),
            e.xp6(2),
            e.Q6J("ngIf", t.isIframeLoading),
            e.xp6(8),
            e.Q6J("src", t.sanitizedUrl, e.uOi),
            e.xp6(2),
            e.Q6J("ngIf", t.isIframeLoading);
        }
      }
      let xe = (() => {
          class i {
            constructor(t) {
              (this.sanitizer = t),
                (this.showModal = !1),
                (this.registrationLink = ""),
                (this.closeModalEvent = new e.vpe()),
                (this.isIframeLoading = !0);
            }
            ngOnChanges() {
              this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
                this.registrationLink
              );
            }
            getSafeRegistrationLink() {
              return this.sanitizer.bypassSecurityTrustResourceUrl(
                this.registrationLink
              );
            }
            closeModal() {
              this.closeModalEvent.emit(), (this.isIframeLoading = !0);
            }
            onIframeLoad() {
              this.isIframeLoading = !1;
            }
            static #e = (this.ɵfac = function (o) {
              return new (o || i)(e.Y36(g.H7));
            });
            static #t = (this.ɵcmp = e.Xpm({
              type: i,
              selectors: [["app-advisors-registration"]],
              inputs: {
                showModal: "showModal",
                registrationLink: "registrationLink",
              },
              outputs: { closeModalEvent: "closeModalEvent" },
              features: [e.TTD],
              decls: 1,
              vars: 1,
              consts: [
                [
                  "class",
                  "backdrop-blur  overflow-x-hidden max-sm:p-5 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex",
                  4,
                  "ngIf",
                ],
                [
                  1,
                  "backdrop-blur",
                  "overflow-x-hidden",
                  "max-sm:p-5",
                  "overflow-y-auto",
                  "fixed",
                  "inset-0",
                  "z-50",
                  "outline-none",
                  "focus:outline-none",
                  "justify-center",
                  "items-center",
                  "flex",
                ],
                [
                  1,
                  "relative",
                  "max-md:hidden",
                  "w-full",
                  "mt-8",
                  "max-w-6xl",
                  "max-h-full",
                  "flex",
                  "flex-col",
                  "rounded-3xl",
                  "bg-black",
                  "justify-center",
                  "items-center",
                ],
                [
                  1,
                  "absolute",
                  "right-0",
                  "top-0",
                  "mt-4",
                  "mr-4",
                  "text-3xl",
                  "font-semibold",
                  "leading-none",
                  "text-gray-600",
                  "outline-none",
                  "focus:outline-none",
                  3,
                  "click",
                ],
                [
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                  "viewBox",
                  "0 0 24 24",
                  "fill",
                  "currentColor",
                  1,
                  "w-8",
                  "h-8",
                ],
                [
                  "fill-rule",
                  "evenodd",
                  "d",
                  "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",
                  "clip-rule",
                  "evenodd",
                ],
                [
                  1,
                  "w-full",
                  "rounded-3xl",
                  "aspect-video",
                  "bg-black",
                  3,
                  "src",
                  "load",
                  "error",
                ],
                [1, "flex", "absolute", "items-center", "justify-center"],
                [
                  "class",
                  "animate-spin  rounded-full h-32 w-32 max-sm:h-16 max-sm:w-16 border-t-2 border-b-2 border-indigo-700 ",
                  4,
                  "ngIf",
                ],
                [
                  "role",
                  "dialog",
                  "aria-modal",
                  "true",
                  1,
                  "relative",
                  "md:hidden",
                  "text-white",
                ],
                [
                  1,
                  "fixed",
                  "inset-y-0",
                  "right-0",
                  "z-50",
                  "w-full",
                  "overflow-y-auto",
                  "bg-black",
                  "overflow-x-hidden",
                  "sm:max-w-sm",
                  "sm:ring-1",
                  "sm:ring-gray-900/10",
                ],
                [
                  "type",
                  "button",
                  1,
                  "-m-2.5",
                  "absolute",
                  "top-2",
                  "right-2",
                  "rounded-md",
                  "p-2.5",
                  "text-gray-300",
                  3,
                  "click",
                ],
                [1, "sr-only"],
                [1, "w-full", "h-full", "bg-black", 3, "src", "load", "error"],
                [
                  1,
                  "flex",
                  "max-md:hidden",
                  "absolute",
                  "items-center",
                  "justify-center",
                ],
                [
                  1,
                  "animate-spin",
                  "rounded-full",
                  "h-32",
                  "w-32",
                  "max-sm:h-16",
                  "max-sm:w-16",
                  "border-t-2",
                  "border-b-2",
                  "border-indigo-700",
                ],
              ],
              template: function (o, n) {
                1 & o && e.YNc(0, we, 18, 4, "div", 0),
                  2 & o && e.Q6J("ngIf", n.showModal);
              },
              dependencies: [s.O5],
            }));
          }
          return i;
        })(),
        O = (() => {
          class i {
            constructor(t) {
              (this.registerService = t),
                (this.activeButton = ""),
                (this.images = [
                  "https://res.cloudinary.com/eskalate/image/upload/v1714657507/Hackathon/Expo-min.png",
                  "https://res.cloudinary.com/eskalate/image/upload/v1714657509/Hackathon/certificateDay-min.jpg",
                  "https://res.cloudinary.com/eskalate/image/upload/v1700746297/Hackathon/yyeni.jpg",
                  "https://res.cloudinary.com/eskalate/image/upload/v1703573932/Hackathon/Architect.jpg",
                  "https://res.cloudinary.com/eskalate/image/upload/v1714657509/Hackathon/hackathon_coding-min.jpg",
                ]),
                (this.isMuted = !0),
                (this.showTeamRegistrationModal = !0),
                (this.slickConfig = {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  autoplaySpeed: 3e3,
                  autoplay: !0,
                  pauseOnHover: !0,
                  infinite: !0,
                  arrows: !0,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        arrows: !0,
                        infinite: !0,
                        slidesToShow: 2,
                        slideToScroll: 2,
                      },
                    },
                    {
                      breakpoint: 768,
                      settings: { slidesToShow: 1, arrows: !0 },
                    },
                  ],
                }),
                (this.toggleChatEvent = new e.vpe()),
                (this.showModal = !1),
                (this.showChat = !1),
                (this.showMentorsModal = !1),
                (this.showAdvisorsModal = !1),
                (this.mentorsRegistrationLink =
                  "https://form.typeform.com/to/ShJTk212"),
                (this.advisorsRegistrationLink =
                  "https://form.typeform.com/to/opvWnrn7"),
                (this.showGetInvolvedModal = !0),
                (this.showIndividualRegistrationModal = !1),
                (this.showRegistration2Modal = !0),
                (this.advisorName = "advisor"),
                (this.mentorName = "mentor"),
                (this.shareData = {
                  title: "MDN",
                  text: "Learn web development on MDN!",
                  url: "https://res.cloudinary.com/eskalate/image/upload/v1716850665/Hackathon-2024/Hackathon_Partner_With_Us.png",
                }),
                (this.sharedImgUrl =
                  "https://res.cloudinary.com/eskalate/image/upload/v1716850665/Hackathon-2024/Hackathon_Partner_With_Us.png"),
                (this.shareImgTitle = "Hackathon Links!"),
                (this.shareText =
                  "https://res.cloudinary.com/eskalate/image/upload/v1716850665/Hackathon-2024/Hackathon_Partner_With_Us.png");
            }
            onShowModal() {
              this.toggleChatEvent.emit(!1),
                (this.showModal = !0),
                document.body.classList.add("overflow-hidden", "z-0");
            }
            checkEligibility() {
              this.registerService.openModal(),
                this.registerService.showEligibility();
            }
            onShowMentorsModal() {
              this.toggleChatEvent.emit(!1),
                (this.showMentorsModal = !0),
                (this.showGetInvolvedModal = !1),
                document.body.classList.add("overflow-hidden", "z-0"),
                document.getElementById("prizes")?.classList.add("z-0"),
                document.getElementById("prizes")?.classList.remove("z-40");
            }
            onShowAdvisorsModal() {
              this.toggleChatEvent.emit(!1),
                (this.showAdvisorsModal = !0),
                (this.showGetInvolvedModal = !1),
                document.body.classList.add("overflow-hidden", "z-0"),
                document.getElementById("prizes")?.classList.add("z-0"),
                document.getElementById("prizes")?.classList.remove("z-40");
            }
            onHideModal() {
              this.toggleChatEvent.emit(!0),
                (this.showModal = !1),
                (this.showGetInvolvedModal = !0),
                (this.showMentorsModal = !1),
                (this.showAdvisorsModal = !1),
                document.body.classList.remove("overflow-hidden", "z-0"),
                document.getElementById("prizes")?.classList.remove("z-0"),
                document.getElementById("prizes")?.classList.add("z-40"),
                document.getElementById("partners")?.classList.remove("hidden"),
                document.getElementById("info")?.classList.remove("hidden"),
                document.getElementById("judges")?.classList.remove("hidden"),
                document
                  .getElementById("eligibility")
                  ?.classList.remove("hidden"),
                document.getElementById("about-us")?.classList.remove("hidden"),
                document.getElementById("footer")?.classList.remove("hidden");
            }
            scrollDown() {
              const t = !document.body.classList.contains("overflow-hidden"),
                o = document.getElementById("prize2024");
              null != o && t && o.scrollIntoView({ behavior: "smooth" });
            }
            setActiveButton(t, o) {
              (this.activeButton = t), window.open(o, "_blank");
            }
            shareImage() {
              navigator.share
                ? navigator
                    .share({
                      title: this.shareImgTitle,
                      text: this.shareText,
                      url: this.sharedImgUrl,
                    })
                    .then(() => {
                      console.log("Thanks for sharing!");
                    })
                    .catch((t) => {
                      console.error("Error sharing:", t);
                    })
                : this.fallbackShare();
            }
            fallbackShare() {
              alert(
                "Web Share API is not supported in this browser. Please use the share buttons below."
              );
            }
            static #e = (this.ɵfac = function (o) {
              return new (o || i)(e.Y36(v));
            });
            static #t = (this.ɵcmp = e.Xpm({
              type: i,
              selectors: [["app-landing"]],
              outputs: { toggleChatEvent: "toggleChatEvent" },
              decls: 60,
              vars: 5,
              consts: [
                [
                  "id",
                  "landing",
                  1,
                  "bg_svg",
                  "min-h-screen",
                  "px-3",
                  "md:px-5",
                  "w-full",
                  "pt-[50px]",
                  "bg-opacity-60",
                  "relative",
                  "flex",
                  "flex-col",
                  "justify-center",
                  "items-center",
                ],
                [3, "registrationLink", "showModal", "closeModalEvent"],
                [
                  1,
                  "bg_svg",
                  "max-w-7xl",
                  "mb-10",
                  "pb-5",
                  "flex",
                  "flex-col",
                  "md:flex-row",
                  "justify-center",
                  "items-end",
                  "drop-shadow-2xl",
                ],
                [
                  1,
                  "order-2",
                  "md:order-1",
                  "text-white",
                  "max-md:mb-5",
                  "flex-1",
                  "flex",
                  "flex-col",
                  "justify-end",
                  "max-md:items-center",
                ],
                [
                  "src",
                  "assets/newLogo.png",
                  "alt",
                  "star",
                  1,
                  "max-lg:h-[150px]",
                  "lg:h-[200px]",
                  "object-contain",
                ],
                [
                  1,
                  "left",
                  "col-span-2",
                  "px-5",
                  "flex",
                  "flex-col",
                  "items-center",
                  "md:items-start",
                  "justify-center",
                ],
                [
                  1,
                  "w-full",
                  "flex",
                  "flex-col",
                  "max-md:items-center",
                  "items-start",
                  "leading-relaxed",
                  "mb-2",
                ],
                [
                  1,
                  "text-left",
                  "w-full",
                  "max-md:text-center",
                  "text-xl",
                  "font-bold",
                  "md:text-3xl",
                  "lg:text-4xl",
                ],
                [
                  1,
                  "font-semibold",
                  "text-left",
                  "w-full",
                  "max-md:text-center",
                  "text-xl",
                  "pb-3",
                ],
                [
                  1,
                  "bg-blue-950",
                  "bg-opacity-50",
                  "p-3",
                  "rounded-lg",
                  "flex",
                  "flex-col",
                  "w-full",
                  "justify-center",
                ],
                [
                  1,
                  "flex",
                  "flex-col",
                  "justify-center",
                  "md:items-start",
                  "mb-3",
                ],
                [1, "relative"],
                [
                  1,
                  "text-xl",
                  "md:mb-2",
                  "lg:inline",
                  "lg:whitespace-nowrap",
                  "text-center",
                  "md:text-start",
                ],
                [1, "flex", "items-start", "md:text-lg", "font-normal", "py-3"],
                ["src", "assets/star.svg", "alt", "star", 1, "pr-5"],
                [1, ""],
                [
                  1,
                  "font-bold",
                  "text-transparent",
                  "bg-gradient-to-r",
                  "from-indigo-600",
                  "to",
                  "to-pink-500",
                  "bg-clip-text",
                ],
                [1, "flex", "items-start", "text-lg", "font-normal", "pb-2"],
                [
                  1,
                  "font-bold",
                  "bg-gradient-to-r",
                  "text-transparent",
                  "from-indigo-600",
                  "to",
                  "to-pink-500",
                  "bg-clip-text",
                ],
                [
                  1,
                  "flex",
                  "flex-col",
                  "md:flex-row",
                  "max-md:items-center",
                  "justify-start",
                ],
                [
                  1,
                  "max-md:mt-5",
                  "text-sm",
                  "rounded-full",
                  "px-8",
                  "py-3",
                  "text-white",
                  "transition-all",
                  "bg-purple-500",
                  "cursor-pointer",
                  "ease-out",
                  "duration-300",
                  "left-1/2",
                  "hover:bg-gradient-to-r",
                  "from-purple-700",
                  "to-pink-500",
                  3,
                  "click",
                ],
                [
                  1,
                  "order-1",
                  "md:order-2",
                  "flex-1",
                  "flex",
                  "items-end",
                  "relative",
                  "w-full",
                ],
                ["id", "bigVideo", 1, "stack", "w-full"],
                [
                  1,
                  "text-center",
                  "aspect-[96/65]",
                  "w-full",
                  "md:w-[95%]",
                  "max-sm:w-full",
                  "card",
                  "bg-black",
                ],
                [
                  "aria-hidden",
                  "true",
                  1,
                  "absolute",
                  "-inset-[2px]",
                  "mx-auto",
                  "bg-gradient-to-r",
                  "from-yellow-400",
                  "to-indigo-600",
                  "rounded-2xl",
                ],
                [
                  "aria-hidden",
                  "true",
                  1,
                  "absolute",
                  "inset-0",
                  "mx-auto",
                  "h-full",
                  "w-full",
                  "bg-indigo-800",
                  "rounded-2xl",
                  "overflow-hidden",
                ],
                [1, "relative", "h-full", "w-full"],
                [
                  "autoplay",
                  "",
                  "loop",
                  "",
                  1,
                  "w-full",
                  "object-cover",
                  "h-full",
                  3,
                  "muted",
                ],
                [
                  "src",
                  "https://res.cloudinary.com/eskalate/video/upload/v1718713749/Hackathon_2023_Highlights.mp4",
                  "type",
                  "video/mp4",
                ],
                [
                  1,
                  "text-center",
                  "aspect-[94/56]",
                  "card",
                  "w-4/5",
                  "max-sm:w-full",
                  "bg-indigo-800",
                ],
                [
                  1,
                  "text-center",
                  "aspect-[92/58]",
                  "card",
                  "w-4/5",
                  "max-sm:w-full",
                  "bg-indigo-800",
                ],
                [
                  1,
                  "rounded-full",
                  "max-md:hidden",
                  "text-white",
                  "border-2",
                  "p-2",
                  "animate-bounce",
                  "cursor-pointer",
                  "mx-auto",
                  "absolute",
                  "bottom-4",
                  "left-1/2",
                  3,
                  "click",
                ],
                [
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                  "fill",
                  "none",
                  "viewBox",
                  "0 0 24 24",
                  "stroke-width",
                  "1.5",
                  "stroke",
                  "currentColor",
                  1,
                  "w-8",
                  "h-8",
                ],
                [
                  "stroke-linecap",
                  "round",
                  "stroke-linejoin",
                  "round",
                  "d",
                  "M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5",
                ],
              ],
              template: function (o, n) {
                1 & o &&
                  (e.TgZ(0, "div", 0)(1, "app-mentors-registration", 1),
                  e.NdJ("closeModalEvent", function () {
                    return n.onHideModal();
                  }),
                  e.qZA(),
                  e.TgZ(2, "app-advisors-registration", 1),
                  e.NdJ("closeModalEvent", function () {
                    return n.onHideModal();
                  }),
                  e.qZA(),
                  e._UZ(3, "app-register-modal"),
                  e.TgZ(4, "div", 2)(5, "div", 3)(6, "div"),
                  e._UZ(7, "img", 4),
                  e.qZA(),
                  e.TgZ(8, "section", 5)(9, "div", 6)(10, "p", 7),
                  e._uU(11, " A2SV Hackathon, 2024 "),
                  e.qZA(),
                  e.TgZ(12, "p", 8),
                  e._uU(13, " AI for Impact - Solving Africa's Challenges "),
                  e.qZA()(),
                  e.TgZ(14, "div", 9)(15, "div", 10)(16, "div", 11)(
                    17,
                    "p",
                    12
                  ),
                  e._uU(18, " Hackathon Semifinals Has Started! "),
                  e.qZA(),
                  e.TgZ(19, "div", 13),
                  e._UZ(20, "img", 14),
                  e.TgZ(21, "p", 15),
                  e._uU(22, " Attracted nearly "),
                  e.TgZ(23, "strong", 16),
                  e._uU(24, "5,000"),
                  e.qZA(),
                  e._uU(25, " registrations from students across "),
                  e.TgZ(26, "strong", 16),
                  e._uU(27, "1,000+"),
                  e.qZA(),
                  e._uU(28, " universities and high schools in "),
                  e.TgZ(29, "strong", 16),
                  e._uU(30, " 48"),
                  e.qZA(),
                  e._uU(31, " African countries. "),
                  e.qZA()(),
                  e.TgZ(32, "div", 17),
                  e._UZ(33, "img", 14),
                  e.TgZ(34, "p", 15),
                  e._uU(35, " Generated "),
                  e.TgZ(36, "strong", 16),
                  e._uU(37, "690+"),
                  e.qZA(),
                  e._uU(38, " project ideas, leading to "),
                  e.TgZ(39, "strong", 18),
                  e._uU(40, "32"),
                  e.qZA(),
                  e._uU(41, " projects in the semi-finals. "),
                  e.qZA()()()(),
                  e.TgZ(42, "div", 19)(43, "button", 20),
                  e.NdJ("click", function () {
                    return n.onShowAdvisorsModal();
                  }),
                  e.TgZ(44, "span"),
                  e._uU(45, "Partner with us"),
                  e.qZA()()()()()(),
                  e.TgZ(46, "div", 21)(47, "div", 22)(48, "div", 23),
                  e._UZ(49, "div", 24),
                  e.TgZ(50, "div", 25)(51, "div", 26)(52, "video", 27),
                  e._UZ(53, "source", 28),
                  e._uU(54, " Your browser does not support the video tag. "),
                  e.qZA()()()(),
                  e._UZ(55, "div", 29)(56, "div", 30),
                  e.qZA()()(),
                  e.TgZ(57, "div", 31),
                  e.NdJ("click", function () {
                    return n.scrollDown();
                  }),
                  e.O4$(),
                  e.TgZ(58, "svg", 32),
                  e._UZ(59, "path", 33),
                  e.qZA()()()),
                  2 & o &&
                    (e.xp6(1),
                    e.Q6J("registrationLink", n.mentorsRegistrationLink)(
                      "showModal",
                      n.showMentorsModal
                    ),
                    e.xp6(1),
                    e.Q6J("registrationLink", n.advisorsRegistrationLink)(
                      "showModal",
                      n.showAdvisorsModal
                    ),
                    e.xp6(50),
                    e.Q6J("muted", n.isMuted));
              },
              dependencies: [I, z, xe],
              styles: [
                '@keyframes _ngcontent-%COMP%_gradientAnimation{0%{background-position:0% 50%}50%{background-position:100% 50%}to{background-position:0% 50%}}.animate-gradient[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_gradientAnimation 10s ease infinite}.button[_ngcontent-%COMP%]{background:red;animation:myfirst 5s;-moz-animation:myfirst 5s infinite;-webkit-animation:myfirst 5s infinite}.bg_svg[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;height:4px}.bg_svg[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:white}.slick-prev[_ngcontent-%COMP%], .slick-next[_ngcontent-%COMP%]{background-color:purple!important;height:19px!important}.bg_svg[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:yellow}.bg_svg[_ngcontent-%COMP%]{background-image:url(/assets/back.svg);background-size:contain;background-repeat:repeat;background-position:top}.vid[_ngcontent-%COMP%]{z-index:-6}.box[_ngcontent-%COMP%]{background:rgba(0,0,0,.65);position:relative;border-radius:8px;box-shadow:0 0 0 1px #00000003}.box[_ngcontent-%COMP%]:after{position:absolute;content:"";top:8px;left:0;right:0;z-index:-1;height:100%;width:100%;transform:scale(.9) translateZ(0);filter:blur(10px);background:linear-gradient(to left,rgba(255,87,112,.4),rgba(228,66,141,.4),rgba(196,45,168,.4),rgba(158,22,195,.4),rgba(101,1,222,.4),rgba(158,22,195,.4),rgba(196,45,168,.4),rgba(228,66,141,.4),rgba(255,87,112,.4));background-size:200% 200%;animation:_ngcontent-%COMP%_animateGlow 1.25s linear infinite}@keyframes _ngcontent-%COMP%_animateGlow{0%{background-position:0% 50%}to{background-position:200% 50%}}@keyframes _ngcontent-%COMP%_tilt-n-move-shaking{0%{transform:translate(0) rotate(0)}25%{transform:translate(5px,5px) rotate(5deg)}50%{transform:translate(0) rotate(0)}75%{transform:translate(-5px,5px) rotate(-5deg)}to{transform:translate(0) rotate(0)}}',
              ],
            }));
          }
          return i;
        })();
      const be = [
          { path: "home", component: O },
          { path: "prizes", component: U },
        ],
        ye = {
          scrollPositionRestoration: "enabled",
          anchorScrolling: "enabled",
          scrollOffset: [0, 64],
        };
      let ke = (() => {
        class i {
          static #e = (this.ɵfac = function (o) {
            return new (o || i)();
          });
          static #t = (this.ɵmod = e.oAB({ type: i }));
          static #i = (this.ɵinj = e.cJS({
            imports: [M.Bz.forRoot(be, ye), M.Bz],
          }));
        }
        return i;
      })();
      var q = c(3078);
      let x = (() => {
          class i {
            constructor() {
              (this._myData$ = new p.X(null)),
                (this.myData$ = this._myData$.asObservable()),
                (this._waitingResponse$ = new p.X(!1));
            }
            seedData() {
              const t = localStorage.getItem("messages");
              null == t
                ? this.addMessage({
                    content:
                      "Hi I\u2019m Ifoki, I am here to answer any of your questions about the hackathon",
                    role: "bot",
                  })
                : this._myData$.next(JSON.parse(t));
            }
            setWaitingStatus(t) {
              const o = localStorage.getItem("waitingStatus")
                  ? JSON.parse(localStorage.getItem("waitingStatus"))
                  : 0,
                n = t ? o + 1 : o - 1;
              localStorage.setItem("waitingStatus", JSON.stringify(n)),
                this._waitingResponse$.next(n > 0);
            }
            resetWaitingStatus() {
              localStorage.setItem("waitingStatus", JSON.stringify(0)),
                this._waitingResponse$.next(!1);
            }
            addMessage(t) {
              const o = localStorage.getItem("messages")
                ? JSON.parse(localStorage.getItem("messages"))
                : [];
              o.push(t),
                localStorage.setItem("messages", JSON.stringify(o)),
                this._myData$.next(o);
            }
            static #e = (this.ɵfac = function (o) {
              return new (o || i)();
            });
            static #t = (this.ɵprov = e.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            }));
          }
          return i;
        })(),
        b = (() => {
          class i {
            constructor() {
              this.displayConsent = !1;
            }
            showConsentUI(t) {
              this.displayConsent = t;
            }
            shouldShowConsentUI() {
              return this.displayConsent;
            }
            getConsentStatus() {
              return null !== localStorage.getItem("consentGiven");
            }
            giveConsent() {
              localStorage.setItem("consentGiven", "true"),
                (this.displayConsent = !1);
            }
            withdrawConsent() {
              localStorage.removeItem("consentGiven"),
                (this.displayConsent = !0);
            }
            static #e = (this.ɵfac = function (o) {
              return new (o || i)();
            });
            static #t = (this.ɵprov = e.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            }));
          }
          return i;
        })(),
        j = (() => {
          class i {
            constructor(t) {
              this.consentService = t;
            }
            loadPlugin() {
              const d = document.createElement("script");
              (d.onerror = (Z) => {
                console.error(
                  "[termsfeed][pc-loader-1]",
                  "[ee][b1b476da]",
                  "plugin failed!",
                  Z
                );
              }),
                (d.async = !0),
                (d.src =
                  "https://cdn.termsfeedtag.com/plugins/pc/v1/d55fc7bf462345899345196be3d8e53a/plugin-2.js"),
                this.consentService.getConsentStatus() &&
                  document.body.appendChild(d);
            }
            static #e = (this.ɵfac = function (o) {
              return new (o || i)(e.LFG(b));
            });
            static #t = (this.ɵprov = e.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            }));
          }
          return i;
        })(),
        w = (() => {
          class i {
            constructor() {
              (this.isModalOpen = !1), (this.modalStateChanged = new e.vpe());
            }
            openModal() {
              (this.isModalOpen = !0), this.modalStateChanged.emit(!0);
            }
            closeModal() {
              (this.isModalOpen = !1), this.modalStateChanged.emit(!1);
            }
            static #e = (this.ɵfac = function (o) {
              return new (o || i)();
            });
            static #t = (this.ɵprov = e.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            }));
          }
          return i;
        })(),
        E = (() => {
          class i {
            constructor() {
              (this.isModalOpenSubject = new p.X(!1)),
                (this.isModalOpen$ = this.isModalOpenSubject.asObservable()),
                (this.modalDataSubject = new p.X({})),
                (this.modalData$ = this.modalDataSubject.asObservable());
            }
            toggleModal(t, o) {
              this.isModalOpenSubject.next(t),
                o && this.modalDataSubject.next(o);
            }
            static #e = (this.ɵfac = function (o) {
              return new (o || i)();
            });
            static #t = (this.ɵprov = e.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            }));
          }
          return i;
        })();
      function Ze(i, r) {
        if (
          (1 & i &&
            (e.TgZ(0, "li")(1, "div", 11)(2, "div", 12),
            e.O4$(),
            e.TgZ(3, "svg", 13),
            e._UZ(4, "path", 14),
            e.qZA()(),
            e.kcU(),
            e.TgZ(5, "div", 15)(6, "p", 16),
            e._uU(7),
            e.qZA()()()()),
          2 & i)
        ) {
          const t = r.$implicit;
          e.xp6(7), e.hij(" ", t.text, " ");
        }
      }
      const Ce = (i, r) => ({
          " border-[1.5px] border-gray-300 text-gray-500 ": i,
          "bg-purple-700 cursor-not-allowed disabled": r,
        }),
        Te = (i, r) => ({
          "border-[1.5px] border-gray-300 text-gray-500 cursor-not-allowed disabled":
            i,
          "bg-purple-700 cursor-not-allowed disabled": r,
        });
      let H = (() => {
        class i {
          constructor() {
            (this.registrationDeadline = new Date(2023, 7, 31, 23, 59, 59)),
              (this.isIndividual = !0),
              (this.registrationButtonVisible = !0),
              (this.criterieas = [
                {
                  text: "Every team must have a minimum of 3 members and a maximum of 5 members.",
                },
                { text: "Every team member must be located in Africa." },
                {
                  text: "All team members must be students currently enrolled in a University, College (undergrad, Associate, Diploma program), or High School, with a graduation year after January 2024. Students currently pursuing or who have completed a Master's degree or higher are not eligible to participate.",
                },
                {
                  text: "If you don't have a team you can register individually and we'll match you with other talented developers, designers, and problem solvers.",
                },
              ]),
              (this.individualCriteria = [
                {
                  text: "You should currently be studying or have completed your studies at a University, College (undergraduate, Associate, or Diploma program), or High School in Africa.",
                  answered: null,
                },
                {
                  text: "Your graduation year should be on or after the year the hackathon is held.",
                  answered: null,
                },
                {
                  text: "You should already be in a team of 4-5 members or be willing to be grouped into teams by the organizers.",
                  answered: null,
                },
              ]),
              (this.teamCriteria = [
                {
                  text: "All of your team members should currently be studying or have completed their studies at a University, College (undergraduate, Associate, or Diploma program), or High School in Africa.",
                  answered: null,
                },
                {
                  text: "The graduation years of all team members should be on or after the year the hackathon is held.",
                  answered: null,
                },
                {
                  text: "Each team member should be registered in only one team.",
                  answered: null,
                },
                {
                  text: "Your team should have 3 to 5 members.",
                  answered: null,
                },
              ]),
              (this.criteria = this.individualCriteria);
          }
          ngOnInit() {
            setInterval(() => {
              this.updateRegistrationButtonVisibility();
            }, 1e3);
          }
          updateRegistrationButtonVisibility() {
            this.registrationButtonVisible =
              new Date() < this.registrationDeadline;
          }
          showIndividualCriteria() {
            (this.isIndividual = !0), (this.criteria = this.individualCriteria);
          }
          showTeamCriteria() {
            (this.isIndividual = !1), (this.criteria = this.teamCriteria);
          }
          static #e = (this.ɵfac = function (o) {
            return new (o || i)();
          });
          static #t = (this.ɵcmp = e.Xpm({
            type: i,
            selectors: [["app-fixed-eligiblity"]],
            standalone: !0,
            features: [e.jDz],
            decls: 17,
            vars: 9,
            consts: [
              [
                "id",
                "fixed-eligibility",
                1,
                "max-sm:px-4",
                "max-lg:px-12",
                "sm:pb-16",
                "pt-24",
                "pb-32",
                "px-5",
                "overflow-x-hidden",
                "flex",
                "flex-col",
                "justify-center",
                "items-center",
              ],
              [1, "max-w-6xl"],
              [
                1,
                "sm:text-4xl",
                "text-center",
                "text-2xl",
                "font-medium",
                "mb-4",
                "text-white",
              ],
              [
                1,
                "p-2",
                "grid",
                "grid-cols-1",
                "lg:grid-cols-2",
                "gap-x-12",
                "items-start",
              ],
              [
                1,
                "flex-none",
                "max-lg:my-6",
                "sm:pb-8",
                "md:mx-8",
                "sm:mt-0",
                "sm:text-left",
              ],
              [1, "text-gray-300", "leading-relaxed", "max-sm:text-start"],
              [1, "flex", "justify-start", "mt-6", "mb-5"],
              [
                1,
                "inline-flex",
                "text-white",
                "border-0",
                "max-sm:px-4",
                "py-2",
                "px-4",
                "rounded-full",
                "focus:outline-none",
                "hover:drop-shadow-xl",
                "text-sm",
                "mr-4",
                3,
                "ngClass",
                "click",
              ],
              [
                1,
                "inline-flex",
                "text-white",
                "border-0",
                "max-sm:px-4",
                "py-2",
                "px-6",
                "focus:outline-none",
                "hover:drop-shadow-xl",
                "rounded-full",
                "text-sm",
                3,
                "ngClass",
                "click",
              ],
              [4, "ngFor", "ngForOf"],
              [
                "src",
                "assets/chat%20image.png",
                "alt",
                "",
                1,
                "flex-none",
                "max-md:hidden",
                "w-full",
                "object-cover",
                "object-center",
                "rounded-3xl",
              ],
              [1, "flex", "items-start", "py-2"],
              [1, "flex-none", "w-8", "h-8", "mr-5"],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "viewBox",
                "0 0 24 24",
                "fill",
                "currentColor",
                1,
                "w-full",
                "h-full",
                "text-[#AC6AFF]",
              ],
              [
                "fill-rule",
                "evenodd",
                "d",
                "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
                "clip-rule",
                "evenodd",
              ],
              [1, "flex-grow"],
              [1, "text-gray-300", "leading-relaxed", "text-start"],
            ],
            template: function (o, n) {
              1 & o &&
                (e.TgZ(0, "section", 0)(1, "div", 1)(2, "p", 2),
                e._uU(3, " Eligibility "),
                e.qZA(),
                e.TgZ(4, "div", 3)(5, "div", 4)(6, "p", 5),
                e._uU(
                  7,
                  " The A2SV Hackathon is currently at the semi-final stage. To participate in future events, students across Africa who are passionate about AI and eager to showcase their skills and creativity should meet the following eligibility requirements: "
                ),
                e.qZA(),
                e.TgZ(8, "div", 6)(9, "button", 7),
                e.NdJ("click", function () {
                  return n.showIndividualCriteria();
                }),
                e._uU(10, " Individual "),
                e.qZA(),
                e.TgZ(11, "button", 8),
                e.NdJ("click", function () {
                  return n.showTeamCriteria();
                }),
                e._uU(12, " Team "),
                e.qZA()(),
                e.TgZ(13, "div")(14, "ul"),
                e.YNc(15, Ze, 8, 1, "li", 9),
                e.qZA()()(),
                e._UZ(16, "img", 10),
                e.qZA()()()),
                2 & o &&
                  (e.xp6(9),
                  e.Q6J(
                    "ngClass",
                    e.WLB(3, Ce, !n.isIndividual, n.isIndividual)
                  ),
                  e.xp6(2),
                  e.Q6J(
                    "ngClass",
                    e.WLB(6, Te, n.isIndividual, !n.isIndividual)
                  ),
                  e.xp6(4),
                  e.Q6J("ngForOf", n.criteria));
            },
            dependencies: [s.ez, s.mk, s.sg],
          }));
        }
        return i;
      })();
      const Ae = ["organizerSection"];
      function Me(i, r) {
        1 & i && (e.O4$(), e.TgZ(0, "svg", 11), e._UZ(1, "path", 12), e.qZA());
      }
      function Ue(i, r) {
        1 & i && (e.O4$(), e.TgZ(0, "svg", 13), e._UZ(1, "path", 12), e.qZA());
      }
      function Se(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 17)(1, "a", 18),
            e.NdJ("click", function () {
              const a = e.CHM(t).$implicit,
                l = e.oxw(2);
              return e.KtG(l.setLinks(a.contact));
            }),
            e.TgZ(2, "div", 19)(3, "div", 20)(4, "div", 21),
            e._UZ(5, "img", 22),
            e.qZA(),
            e.TgZ(6, "h1", 23),
            e._uU(7),
            e.qZA(),
            e.TgZ(8, "p", 24),
            e._uU(9),
            e.qZA()(),
            e.TgZ(10, "div", 25)(11, "div", 26),
            e._UZ(12, "img", 27),
            e.qZA()()()()();
        }
        if (2 & i) {
          const t = r.$implicit;
          e.xp6(5),
            e.s9C("src", t.image, e.LSH),
            e.xp6(2),
            e.hij(" ", t.name, " "),
            e.xp6(2),
            e.hij(" ", t.description, " ");
        }
      }
      function Ie(i, r) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 14, 15), e.YNc(2, Se, 13, 3, "div", 16), e.qZA()),
          2 & i)
        ) {
          const t = e.oxw();
          e.xp6(2), e.Q6J("ngForOf", t.organizers);
        }
      }
      let J = (() => {
        class i {
          constructor() {
            (this.showCards = !0),
              (this.organizers = [
                {
                  name: "Beimnet Bekele",
                  description:
                    "Meet Beimnet Bekele, an Aspiring Machine Learning Researcher and accomplished Software Engineer. With a keen interest in Machine Learning, Beimnet dedicates his time to exploring and advancing this cutting-edge field. His expertise spans across software engineering and machine learning, where he continually strives to innovate and contribute to the ever-evolving world of technology.",
                  image:
                    "https://res.cloudinary.com/eskalate/image/upload/v1722869427/team/bemni_hack.png",
                  contact: "https://www.linkedin.com/in/beimnet-guta/",
                },
                {
                  name: "Yordanos Asmare",
                  description:
                    "Yordanos, a first-gen Ethiopian-American, brings a global perspective to her roles in community organizing, talent recruiting, and scaling companies. Passionate about breaking barriers, she collaborates with dreamers to foster inclusive teams. Outside of work, Yordanos enjoys warm weather, chocolate, music, soccer, and delving into philosophy and poetry.",
                  image:
                    "https://res.cloudinary.com/eskalate/image/upload/v1721895905/team/yordanos.jpg",
                  contact: "https://www.linkedin.com/in/yordanost",
                },
                {
                  name: "Emre Varol",
                  description:
                    "Emre, the distinguished CEO of A2SV, has a rich background including tenures at industry giants like Palantir and Google. He fervently strives to make a difference by bridging the gap between high-potential African students and transformative opportunities. His focus lies in fostering the next generation of African tech leaders.",
                  image:
                    "https://res.cloudinary.com/eskalate/image/upload/v1700745290/Hackathon/emre.png",
                  contact: "https://www.linkedin.com/in/emre-varol/",
                },
                {
                  name: "Rediet Ferew",
                  description:
                    "Rediet, a software engineering student in the Artificial Intelligence stream, loves various aspects of her field. First, its flexibility allows her to apply it to real-life challenges across different domains. Second, it hones her problem-solving skills and broadens her perspectives. Third, being in-demand and remote-friendly, it offers convenience and opportunities for collaboration, fostering a strong team spirit.",
                  image:
                    "https://res.cloudinary.com/eskalate/image/upload/v1721895905/team/rediet4.png",
                  contact:
                    "https://www.linkedin.com/in/rediet-ferew-8a18b922a/",
                },
                {
                  name: "Bethelhem Yemane",
                  description:
                    "Bethelhem is a passionate individual deeply fascinated by the world of software engineering. For her, the field's allure lies in the chance to exercise creativity and devise innovative solutions to real-life challenges, whether through automation, problem-solving, or entertainment.",
                  image:
                    "https://res.cloudinary.com/eskalate/image/upload/v1721895905/team/bethelhem4.png",
                  contact: "https://www.linkedin.com/in/betabravah/",
                },
                {
                  name: "Paulos Dessie",
                  description:
                    "Paulos Dessie finds software engineering to be the most exciting field, offering endless opportunities for learning and growth. He enjoys the challenges and innovations at the forefront of technology. In his free time, Paulos loves playing basketball for the teamwork and strategy, and watching movies for the storytelling. These activities provide a perfect balance to his work, helping him relax and recharge.",
                  image:
                    "https://res.cloudinary.com/eskalate/image/upload/v1721895905/team/paulos4.png",
                  contact:
                    "https://www.linkedin.com/in/paulos-nedaw-a22207235/",
                },
                {
                  name: "Nathnael Dereje",
                  description:
                    "Natnael, a dedicated software engineering student at AAiT, finds fulfillment in the field's pivotal role in solving societal problems and simplifying lives through digitalization. With a laptop and a code editor, he is captivated by the endless possibilities of building innovative solutions.",
                  image:
                    "https://res.cloudinary.com/eskalate/image/upload/v1721895905/team/nathaniel4.png",
                  contact: "https://www.linkedin.com/in/nathnael-dereje/",
                },
                {
                  name: "Amanuel Alehegne",
                  description:
                    "Amanuel Alehegn's love for mathematics, puzzles, and problem-solving has naturally led him to a career in software engineering, where logic and math come to life. He believes technology can solve almost any challenge, with software as the soul of machines. His passion for AI and machine learning drives his ambition to be at the forefront of the coming Artificial General Intelligence (AGI) revolution.",
                  image:
                    "https://res.cloudinary.com/eskalate/image/upload/v1722863506/team/aman_astu4.png",
                  contact: "https://www.linkedin.com/in/amanuel-alehegne/",
                },
              ]);
          }
          setLinks(t) {
            window.open(t, "_blank");
          }
          toggleCards() {
            (this.showCards = !this.showCards),
              this.showCards &&
                setTimeout(() => {
                  this.scrollToCardsSection();
                }, 0);
          }
          scrollToCardsSection() {
            console.log("scrool to section"),
              this.organizerSection.nativeElement.scrollIntoView({
                behavior: "smooth",
              });
          }
          static #e = (this.ɵfac = function (o) {
            return new (o || i)();
          });
          static #t = (this.ɵcmp = e.Xpm({
            type: i,
            selectors: [["app-organizers"]],
            viewQuery: function (o, n) {
              if ((1 & o && e.Gf(Ae, 5), 2 & o)) {
                let a;
                e.iGM((a = e.CRH())) && (n.organizerSection = a.first);
              }
            },
            standalone: !0,
            features: [e.jDz],
            decls: 13,
            vars: 3,
            consts: [
              [
                "id",
                "organizers",
                1,
                "text-white",
                "px-20",
                "max-sm:px-4",
                "px-5",
                "body-font",
                "snap-start",
                "snap-always",
                "ease-in-out",
                "flex",
                "flex-col",
                "justify-center",
                "items-center",
              ],
              [
                1,
                "container",
                "py-16",
                "mx-auto",
                "flex",
                "flex-col",
                "justify-center",
                "items-center",
                "max-w-6xl",
              ],
              [1, "container", "flex", "items-center", "justify-center"],
              [
                1,
                "mt-2",
                "w-full",
                "md:w-4/5",
                "border-b",
                "border-gray-700",
                "flex",
                "justify-between",
                "items-center",
                "cursor-pointer",
                "mb-12",
                "transition-transform",
                "transform-all",
                "hover:scale-105",
                3,
                "click",
              ],
              [1, "flex", "items-center", "mr-10"],
              [
                1,
                "sm:text-4xl",
                "text-2xl",
                "text-center",
                "font-bold",
                "text-transparent",
                "bg-gradient-to-r",
                "from-indigo-600",
                "to-pink-500",
                "bg-clip-text",
              ],
              [1, "mb-2"],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "fill",
                "none",
                "viewBox",
                "0 0 24 24",
                "stroke-width",
                "1.5",
                "stroke",
                "currentColor",
                "class",
                "w-8 h-8 text-pink-400",
                4,
                "ngIf",
              ],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "fill",
                "none",
                "viewBox",
                "0 0 24 24",
                "stroke-width",
                "1.5",
                "stroke",
                "currentColor",
                "class",
                "w-8 h-8 text-pink-400 transform rotate-180",
                4,
                "ngIf",
              ],
              [
                1,
                "lg:w-4/5",
                "mb-5",
                "mx-auto",
                "leading-relaxed",
                "text-base",
                "text-white",
                "text-justify",
                "justify-between",
              ],
              [
                "class",
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5",
                4,
                "ngIf",
              ],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "fill",
                "none",
                "viewBox",
                "0 0 24 24",
                "stroke-width",
                "1.5",
                "stroke",
                "currentColor",
                1,
                "w-8",
                "h-8",
                "text-pink-400",
              ],
              [
                "stroke-linecap",
                "round",
                "stroke-linejoin",
                "round",
                "d",
                "M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5",
              ],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "fill",
                "none",
                "viewBox",
                "0 0 24 24",
                "stroke-width",
                "1.5",
                "stroke",
                "currentColor",
                1,
                "w-8",
                "h-8",
                "text-pink-400",
                "transform",
                "rotate-180",
              ],
              [
                1,
                "grid",
                "grid-cols-1",
                "md:grid-cols-2",
                "lg:grid-cols-3",
                "gap-4",
                "mt-5",
              ],
              ["organizerSection", ""],
              [
                "tabindex",
                "0",
                "class",
                "px-4 text-center rounded border border-gray-800 group hover:bg-gray-700 hover:shadow-md hover:border transition duration-300 hover:border-solid p-2 transform hover:scale-105",
                4,
                "ngFor",
                "ngForOf",
              ],
              [
                "tabindex",
                "0",
                1,
                "px-4",
                "text-center",
                "rounded",
                "border",
                "border-gray-800",
                "group",
                "hover:bg-gray-700",
                "hover:shadow-md",
                "hover:border",
                "transition",
                "duration-300",
                "hover:border-solid",
                "p-2",
                "transform",
                "hover:scale-105",
              ],
              [1, "cursor-pointer", 3, "click"],
              [
                1,
                "flex",
                "flex-col",
                "justify-between",
                "items-center",
                "h-full",
              ],
              [1, "flex", "flex-col", "justify-center", "items-center"],
              [
                1,
                "w-[150px]",
                "h-[150px]",
                "text-center",
                "bg-gray-500",
                "p-2",
                "rounded-full",
                "transition-transform",
                "transform-gpu",
                "hover:scale-105",
                "hover:bg-gray-400",
              ],
              [
                "alt",
                "team",
                1,
                "w-full",
                "h-full",
                "bg-gradient-to-r",
                "from-blue-400",
                "to-green-300",
                "object-cover",
                "object-center",
                "flex-shrink-0",
                "rounded-full",
                "mr-4",
                3,
                "src",
              ],
              [1, "text-center", "text-3xl", "py-3", "font-bold"],
              [1, "py-3", "px-4", "text-justify", "justify-between"],
              [1, "group", "relative"],
              [1, "hidden", "group-hover:inline-block", "text-white"],
              [
                "src",
                "assets/Linkedin.svg",
                "alt",
                "",
                1,
                "w-10",
                "h-10",
                "text-white",
              ],
            ],
            template: function (o, n) {
              1 & o &&
                (e.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3),
                e.NdJ("click", function () {
                  return n.toggleCards();
                }),
                e.TgZ(4, "span", 4)(5, "p", 5),
                e._uU(6, " Hackathon Organizers "),
                e.qZA()(),
                e.TgZ(7, "span", 6),
                e.YNc(8, Me, 2, 0, "svg", 7)(9, Ue, 2, 0, "svg", 8),
                e.qZA()()(),
                e.TgZ(10, "p", 9),
                e._uU(
                  11,
                  " Get to know the incredible team behind Hackathon 2024! Our organizers are a group of dedicated and passionate individuals committed to creating an unforgettable experience for all participants. From planning engaging events to fostering an inclusive community, they work tirelessly to ensure everything runs smoothly. "
                ),
                e.qZA(),
                e.YNc(12, Ie, 3, 1, "div", 10),
                e.qZA()()),
                2 & o &&
                  (e.xp6(8),
                  e.Q6J("ngIf", !n.showCards),
                  e.xp6(1),
                  e.Q6J("ngIf", n.showCards),
                  e.xp6(3),
                  e.Q6J("ngIf", n.showCards));
            },
            dependencies: [s.ez, s.sg, s.O5],
          }));
        }
        return i;
      })();
      const ze = (i) => ({ heading: i }),
        m = (i) => ({ description: i });
      let Oe = (() => {
        class i {
          constructor(t, o) {
            (this.elRef = t),
              (this.modalService = o),
              (this.toggleChatEvent = new e.vpe()),
              (this.showMenu = !1),
              (this.showModal = !1),
              (this.showChat = !1),
              (this.showMentorsModal = !1),
              (this.showAdvisorsModal = !1),
              (this.mentorsRegistrationLink =
                "https://form.typeform.com/to/UvayCDEJ"),
              (this.advisorsRegistrationLink =
                "https://form.typeform.com/to/mMzeQ63l"),
              (this.showGetInvolvedModal = !0),
              (this.showTeamRegistrationModal = !1),
              (this.showIndividualRegistrationModal = !1),
              (this.showRegistrationModal = !1),
              (this.currentSection = "home"),
              (this.registrationDeadline = new Date(2024, 5, 31, 23, 59, 59)),
              (this.registrationButtonVisible = !1),
              (this.countDownVisible = !1),
              (this.countDownDate = new Date("2024-5-15T20:59:00")),
              (this.animated = !1),
              (this.day_desc = [
                {
                  day: "Day 1",
                  desc: "Experience innovation firsthand as finalists showcase their groundbreaking projects to the public at Abrehot Library in Addis Ababa.",
                },
                {
                  day: "Day 2",
                  desc: "The stakes are high at the Jury Panel. Witness the excitement of the award ceremony where the most innovative solutions will be honored and celebrated.",
                },
                {
                  day: "Day 3",
                  desc: "Beginning with an in-person investor panel in the morning followed by a remote panel in the afternoon, designed to propel the best African AI ventures onto the global stage.",
                },
              ]);
          }
          ngOnInit() {
            this.checkElementsInView(),
              setInterval(() => {
                this.updateCountDownVisibility();
              }, 1e3);
          }
          onScroll() {
            this.checkElementsInView();
          }
          checkElementsInView() {
            const o = this.elRef.nativeElement
                .querySelector("#home_component")
                .getBoundingClientRect(),
              n = o.top < window.innerHeight && o.bottom >= 0;
            !this.animated && n
              ? (this.animated = !0)
              : n || (this.animated = !1);
          }
          openModal(t) {
            t.stopPropagation(), this.modalService.openModal();
          }
          get isModalOpen() {
            return this.modalService.isModalOpen;
          }
          onShowModal() {
            this.toggleChatEvent.emit(!1),
              (this.showModal = !0),
              document.body.classList.add("overflow-hidden", "z-0");
          }
          updateCountDownVisibility() {
            this.countDownVisible = new Date() < this.countDownDate;
          }
          onHideModal() {
            this.toggleChatEvent.emit(!0),
              (this.showModal = !1),
              (this.showGetInvolvedModal = !0),
              (this.showRegistrationModal = !0),
              (this.showMentorsModal = !1),
              (this.showAdvisorsModal = !1),
              (this.showTeamRegistrationModal = !1),
              (this.showIndividualRegistrationModal = !1),
              document.body.classList.remove("overflow-hidden", "z-0"),
              document.getElementById("prizes")?.classList.remove("z-0"),
              document.getElementById("prizes")?.classList.add("z-40"),
              document.getElementById("partners")?.classList.remove("hidden"),
              document.getElementById("info")?.classList.remove("hidden"),
              document.getElementById("judges")?.classList.remove("hidden"),
              document
                .getElementById("eligibility")
                ?.classList.remove("hidden"),
              document.getElementById("about-us")?.classList.remove("hidden"),
              document.getElementById("footer")?.classList.remove("hidden"),
              document.getElementById("workshops")?.classList.remove("hidden");
          }
          scrollDown() {
            const t = !document.body.classList.contains("overflow-hidden"),
              o = document.getElementById("prizes");
            null != o && t && o.scrollIntoView({ behavior: "smooth" });
          }
          scrollToSection(t) {
            this.currentSection = t;
            const o = !document.body.classList.contains("overflow-hidden"),
              n = document.getElementById(t);
            null != n && o && n.scrollIntoView({ behavior: "smooth" });
          }
          setActiveButton(t, o) {
            window.open(o, "_blank");
          }
          static #e = (this.ɵfac = function (o) {
            return new (o || i)(e.Y36(e.SBq), e.Y36(w));
          });
          static #t = (this.ɵcmp = e.Xpm({
            type: i,
            selectors: [["app-home"]],
            hostBindings: function (o, n) {
              1 & o &&
                e.NdJ(
                  "scroll",
                  function () {
                    return n.onScroll();
                  },
                  !1,
                  e.Jf7
                );
            },
            outputs: { toggleChatEvent: "toggleChatEvent" },
            decls: 56,
            vars: 27,
            consts: [
              [
                "id",
                "home",
                1,
                "relative",
                "w-full",
                "flex",
                "flex-col",
                "justify-center",
                "items-center",
                "px-5",
              ],
              [1, "w-full", "z-3", "max-w-6xl"],
              [
                1,
                "max-md:bg-black",
                "mx-auto",
                "max-w-[1680px]",
                "relative",
                "w-full",
                "h-full",
                "max-md:bg-opacity-80",
                "max-md:px-8",
                "px-10",
                "max-sm:pt-5",
              ],
              [1, "max-md:mt-12", "m-auto", "flex", "justify-center"],
              [
                "id",
                "home_component",
                1,
                "p-3",
                "relative",
                "flex",
                "flex-col",
                "max-md:justify-between",
                "md:flex-row",
                "justify-center",
              ],
              [
                1,
                "bg_svg",
                "flex-1",
                "mr-4",
                "flex",
                "flex-col",
                "items-start",
                "md:overflow-auto",
                "mb-5",
                "h-full",
              ],
              [
                1,
                "opacity-0",
                "px-2",
                "text-left",
                "font-poppins",
                "text-2xl",
                "md:text-3xl",
                "lg:text-4xl",
                "max-sm:font-medium",
                "font-bold",
                "text-gray-200",
                "rounded",
                3,
                "ngClass",
              ],
              [
                1,
                "opacity-0",
                "px-2",
                "text-left",
                "text-lg",
                "font-font-poppins",
                "max-md:text-xl",
                "max-sm:font-medium",
                "font-semibold",
                "text-gray-200",
                "rounded",
                3,
                "ngClass",
              ],
              [1, "relative", "md:mr-10"],
              [
                1,
                "text-gray-300",
                "px-2",
                "font-light",
                "text-lg",
                "leading-relaxed",
                "text-left",
                "justifyb",
                "py-4",
                "rounded",
                "bg-blue-950",
                "bg-opacity-50",
              ],
              [1, "my-3", "opacity-0", 3, "ngClass"],
              [
                1,
                "opacity-0",
                "flex",
                "items-start",
                "text-[15px]",
                "py-2",
                "ml-3",
                3,
                "ngClass",
              ],
              ["src", "assets/star.svg", "alt", "star", 1, "pr-5"],
              [1, ""],
              [
                1,
                "font-bold",
                "text-transparent",
                "bg-gradient-to-r",
                "from-indigo-600",
                "to",
                "to-pink-500",
                "bg-clip-text",
              ],
              ["href", "hacks.a2sv.org", "target", "_blank"],
              [
                1,
                "my-5",
                "opacity-0",
                "md:ml-10",
                "px-8",
                "py-3",
                "text-lg",
                "text-white",
                "rounded-full",
                "transition-all",
                "transform",
                "hover:scale-110",
                "hover:bg-purple-500",
                "bg-purple-700",
                3,
                "ngClass",
                "click",
              ],
              [1, "flex", "justify-between", "items-center"],
              [
                1,
                "opacity-0",
                "h-full",
                "rounded-lg",
                "flex-1",
                "lg:flex-grow",
                "flex",
                "md:justify-center",
                "md:items-center",
                3,
                "ngClass",
              ],
              [1, "h-3/4", "w-full"],
              [
                "id",
                "videoIframe",
                "src",
                "https://www.youtube.com/embed/q1HUaiF-1CA?si=rYSUUkaMH2P-rhy4",
                "frameborder",
                "0",
                "allow",
                "autoplay; fullscreen; picture-in-picture",
                "allowfullscreen",
                "",
                "allowfullscr",
                "",
                1,
                "h-full",
                "w-full",
                "bg-black",
                "object-center",
                "object-contain",
                "rounded-2xl",
              ],
            ],
            template: function (o, n) {
              1 & o &&
                (e.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(
                  4,
                  "div",
                  4
                )(
                  5,
                  "div",
                  5
                )(6, "div")(7, "p", 6),
                e._uU(8, " A2SV Hackathon, 2023 "),
                e.qZA(),
                e.TgZ(9, "p", 7),
                e._uU(10, " Pushing Boundaries with Generative AI! "),
                e.qZA()(),
                e.TgZ(11, "div", 8)(12, "div", 9)(13, "p", 10),
                e._uU(
                  14,
                  " A2SV Generative AI for Africa Hackathon, the largest in Africa "
                ),
                e.qZA(),
                e.TgZ(15, "div", 11),
                e._UZ(16, "img", 12),
                e.TgZ(17, "p", 13),
                e._uU(18, "Attracted "),
                e.TgZ(19, "strong", 14),
                e._uU(20, "3,700+"),
                e.qZA(),
                e._uU(21, " registrations from students across "),
                e.TgZ(22, "strong", 14),
                e._uU(23, "587"),
                e.qZA(),
                e._uU(24, " universities and high schools in "),
                e.TgZ(25, "strong", 14),
                e._uU(26, " 47"),
                e.qZA(),
                e._uU(27, " African countries."),
                e.qZA()(),
                e.TgZ(28, "div", 11),
                e._UZ(29, "img", 12),
                e.TgZ(30, "p", 13),
                e._uU(31, "Generated "),
                e.TgZ(32, "strong", 14),
                e._uU(33, "500+"),
                e.qZA(),
                e._uU(34, " project ideas, leading to "),
                e.TgZ(35, "strong", 14),
                e._uU(36, "40"),
                e.qZA(),
                e._uU(37, " projects in the semi-finals."),
                e.qZA()(),
                e.TgZ(38, "div", 11),
                e._UZ(39, "img", 12),
                e.TgZ(40, "p", 13),
                e._uU(41, "The Grand Finale in Ethiopia featured "),
                e.TgZ(42, "strong", 14),
                e._uU(43, "9"),
                e.qZA(),
                e._uU(
                  44,
                  " exceptional finalist teams from Tunisia, Kenya, Ethiopia, Namibia, Algeria, and Cameroon."
                ),
                e.qZA()(),
                e.TgZ(45, "div", 11),
                e._UZ(46, "img", 12),
                e.TgZ(47, "p", 13),
                e._uU(
                  48,
                  "Finalist teams showcased their projects publicly, presenting to a jury and potential investors."
                ),
                e.qZA()()(),
                e.TgZ(49, "a", 15)(50, "button", 16),
                e.NdJ("click", function () {
                  return n.setActiveButton(
                    "a2sv",
                    "https://hackathon-2023.a2sv.org"
                  );
                }),
                e._uU(51, " Hackathon 2023 "),
                e.qZA()()(),
                e._UZ(52, "div", 17),
                e.qZA(),
                e.TgZ(53, "div", 18)(54, "div", 19),
                e._UZ(55, "iframe", 20),
                e.qZA()()()()()()()),
                2 & o &&
                  (e.xp6(7),
                  e.Q6J("ngClass", e.VKq(9, ze, n.animated)),
                  e.xp6(2),
                  e.Q6J("ngClass", e.VKq(11, m, n.animated)),
                  e.xp6(4),
                  e.Q6J("ngClass", e.VKq(13, m, n.animated)),
                  e.xp6(2),
                  e.Q6J("ngClass", e.VKq(15, m, n.animated)),
                  e.xp6(13),
                  e.Q6J("ngClass", e.VKq(17, m, n.animated)),
                  e.xp6(10),
                  e.Q6J("ngClass", e.VKq(19, m, n.animated)),
                  e.xp6(7),
                  e.Q6J("ngClass", e.VKq(21, m, n.animated)),
                  e.xp6(5),
                  e.Q6J("ngClass", e.VKq(23, m, n.animated)),
                  e.xp6(3),
                  e.Q6J("ngClass", e.VKq(25, m, n.animated)));
            },
            dependencies: [s.mk],
            styles: [
              '.box[_ngcontent-%COMP%]{background:rgba(0,0,0,.85);padding:8px 12px;position:relative;border-radius:4px;box-shadow:0 0 0 1px #00000003}.box[_ngcontent-%COMP%]:after{position:absolute;content:"";top:8px;left:0;right:0;z-index:-1;height:100%;width:100%;transform:scale(.9) translateZ(0);filter:blur(15px);background:linear-gradient(to left,#ff5770,#e4428d,#c42da8,#9e16c3,#6501de,#9e16c3,#c42da8,#e4428d,#ff5770);background-size:200% 200%;animation:_ngcontent-%COMP%_animateGlow 1.25s linear infinite}.overflow-auto[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.overflow-auto[_ngcontent-%COMP%]{scrollbar-width:thin;scrollbar-color:transparent transparent}.bg_svg[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;height:4px}.bg_svg[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:white}.bg_svg[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:yellow}.bg-custom[_ngcontent-%COMP%]{background-size:100% 70vh;background-position:top}.bg_svg[_ngcontent-%COMP%]{background-image:url(/assets/back.svg);background-size:cover;background-repeat:no-repeat;background-position:center}@keyframes _ngcontent-%COMP%_animateGlow{0%{background-position:0% 50%}to{background-position:200% 50%}}@keyframes _ngcontent-%COMP%_tilt-n-move-shaking{0%{transform:translate(0) rotate(0)}25%{transform:translate(5px,5px) rotate(5deg)}50%{transform:translate(0) rotate(0)}75%{transform:translate(-5px,5px) rotate(-5deg)}to{transform:translate(0) rotate(0)}}.bg-opacity[_ngcontent-%COMP%]{background-color:#9ca3af80}@keyframes _ngcontent-%COMP%_FromLeft{0%{opacity:0;transform:translate(-50px)}to{opacity:1;transform:translate(0)}}@keyframes _ngcontent-%COMP%_fadeInFromLeft{0%{opacity:0;transform:translate(-50px)}to{opacity:1;transform:translate(0)}}@keyframes _ngcontent-%COMP%_fadeInFromLeftDelayed{0%{opacity:0;transform:translate(-50px)}to{opacity:1;transform:translate(0)}}.heading_bg[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_FromLeft 1s ease-in-out forwards .5s}.heading[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInFromLeft 1s ease-in-out forwards 1s}.description[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInFromLeftDelayed 1s ease-in-out forwards 1.5s}',
            ],
          }));
        }
        return i;
      })();
      var qe = c(4830);
      let L = (() => {
        class i {
          constructor() {
            this.initializeCloudinary();
          }
          initializeCloudinary() {
            this.cloudinary = new q.r({ cloud: { cloudName: "eskalate" } });
          }
          generateImageUrl(t) {
            const o = this.cloudinary.image(t);
            return o.resize((0, qe.hl)().width(1280).height(720)), o;
          }
          static #e = (this.ɵfac = function (o) {
            return new (o || i)();
          });
          static #t = (this.ɵprov = e.Yz7({
            token: i,
            factory: i.ɵfac,
            providedIn: "root",
          }));
        }
        return i;
      })();
      const je = (i, r, t) => ({
        "md:-translate-y-[15px]": i,
        "md:-translate-y-[40px]": r,
        "md:-translate-y-0": t,
      });
      function Ee(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 6)(1, "div", 7)(2, "div", 8),
            e._UZ(3, "img", 9),
            e.qZA(),
            e.TgZ(4, "div", 10)(5, "div", 11),
            e._UZ(6, "img", 12),
            e.qZA(),
            e.TgZ(7, "h2", 13),
            e._uU(8),
            e.qZA(),
            e.TgZ(9, "div", 14)(10, "h2", 15),
            e._uU(11),
            e.qZA(),
            e.TgZ(12, "p", 16),
            e._uU(13),
            e.qZA()()(),
            e.TgZ(14, "div", 17)(15, "button", 18),
            e.NdJ("click", function () {
              const a = e.CHM(t).$implicit,
                l = e.oxw();
              return e.KtG(l.onMoreOptionsClick(a));
            }),
            e._uU(16, " More "),
            e.qZA()()()();
        }
        if (2 & i) {
          const t = r.$implicit,
            o = r.index;
          e.xp6(1),
            e.Tol(e.kEZ(8, je, 0 === o, 1 === o, 2 === o)),
            e.xp6(2),
            e.Q6J("src", t.awrd_img, e.LSH),
            e.xp6(3),
            e.Q6J("src", t.img, e.LSH),
            e.xp6(2),
            e.hij(" ", t.prize_type, " "),
            e.xp6(3),
            e.AsE(" ", t.projectname, " by Team ", t.team, " "),
            e.xp6(2),
            e.hij(" ", t.description, " ");
        }
      }
      let He = (() => {
          class i {
            onMoreOptionsClick(t) {
              this.cardTouched.emit(t);
            }
            constructor(t, o) {
              (this.cloudinaryService = t),
                (this.renderer = o),
                (this.title = ""),
                (this.winners = []),
                (this.descr = ""),
                (this.cardTouched = new e.vpe());
            }
            static #e = (this.ɵfac = function (o) {
              return new (o || i)(e.Y36(L), e.Y36(e.Qsj));
            });
            static #t = (this.ɵcmp = e.Xpm({
              type: i,
              selectors: [["app-track-winners"]],
              inputs: { title: "title", winners: "winners", descr: "descr" },
              outputs: { cardTouched: "cardTouched" },
              decls: 8,
              vars: 3,
              consts: [
                [
                  1,
                  "w-full",
                  "flex",
                  "flex-col",
                  "justify-center",
                  "items-center",
                  "rounded-md",
                  "pt-6",
                ],
                [
                  1,
                  "text-4xl",
                  "w-full",
                  "text-center",
                  "font-bold",
                  "text-transparent",
                  "bg-gradient-to-r",
                  "from-indigo-600",
                  "to-pink-500",
                  "bg-clip-text",
                  "mt-5",
                ],
                [1, "flex", "justify-center", "items-center", "mt-10", "mb-8"],
                [
                  1,
                  "lg:w-3/4",
                  "mx-auto",
                  "leading-relaxed",
                  "text-base",
                  "text-white",
                  "text-justify",
                  "justify-between",
                  "mb-6",
                ],
                [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4", "p-2"],
                ["class", "my-6", 4, "ngFor", "ngForOf"],
                [1, "my-6"],
                [
                  1,
                  "relative",
                  "h-full",
                  "grid",
                  "grid-rows-auto-1fr",
                  "rounded-lg",
                  "my-10",
                  "md:my-0",
                  "text-gray-300",
                  "border-2",
                  "border-gray-800",
                  "group",
                  "hover:bg-gray-700",
                  "hover:shadow-md",
                  "hover:border",
                  "transition",
                  "duration-300",
                  "hover:border-solid",
                  "transform",
                  "hover:scale-105",
                  "hover:text-white",
                ],
                [
                  1,
                  "absolute",
                  "z-10",
                  "top-[-30px]",
                  "-right-5",
                  "w-1/6",
                  "max-sm:w-1/6",
                  "rounded-full",
                ],
                [
                  "alt",
                  "prize image",
                  "loading",
                  "lazy",
                  1,
                  "h-full",
                  "w-full",
                  "object-cover",
                  "rounded-full",
                  3,
                  "src",
                ],
                [1, "w-full", "rounded-t-lg", "overflow-hidden", "p-2"],
                [1, "h-[230px]", "rounded-t-lg", "mb-5"],
                [
                  "alt",
                  "group image",
                  "loading",
                  "lazy",
                  1,
                  "object-cover",
                  "w-full",
                  "h-full",
                  "rounded-t-lg",
                  3,
                  "src",
                ],
                [
                  1,
                  "text-2xl",
                  "px-4",
                  "mb-8",
                  "font-bold",
                  "title-font",
                  "text-transparent",
                  "bg-gradient-to-r",
                  "from-indigo-600",
                  "to-pink-500",
                  "bg-clip-text",
                  "group-hover:text-white",
                ],
                [1, "text-white", "text-justify", "justify-between", "px-4"],
                [1, "title-font", "font-bold", "text-xl", "text-left", "mb-2"],
                [1, "leading-relaxed", "text-left", "mb-3", "text-gray-300"],
                [1, "flex", "justify-center", "items-end", "mb-5", "mt-2"],
                [
                  1,
                  "px-4",
                  "py-2",
                  "border",
                  "rounded-full",
                  "hover:border-none",
                  "hover:bg-purple-700",
                  "hover:text-white",
                  3,
                  "click",
                ],
              ],
              template: function (o, n) {
                1 & o &&
                  (e.TgZ(0, "section", 0)(1, "p", 1),
                  e._uU(2),
                  e.qZA(),
                  e.TgZ(3, "div", 2)(4, "p", 3),
                  e._uU(5),
                  e.qZA()(),
                  e.TgZ(6, "div", 4),
                  e.YNc(7, Ee, 17, 12, "div", 5),
                  e.qZA()()),
                  2 & o &&
                    (e.xp6(2),
                    e.hij(" ", n.title, "\n"),
                    e.xp6(3),
                    e.hij(" ", n.descr, " "),
                    e.xp6(2),
                    e.Q6J("ngForOf", n.winners));
              },
              dependencies: [s.sg],
              styles: [
                ".custome[_ngcontent-%COMP%]:hover   .shadow_class[_ngcontent-%COMP%]{opacity:.6;transition:opacity .3s ease-in-out}.custome[_ngcontent-%COMP%]:hover   .img_card[_ngcontent-%COMP%]{height:100%;width:100%;border-radius:1rem}.custome[_ngcontent-%COMP%]:hover   .full-width[_ngcontent-%COMP%]{height:full}.custome[_ngcontent-%COMP%]:hover   .image[_ngcontent-%COMP%]{border-radius:1rem;transition:border-radius .3s ease-in-out}.custome[_ngcontent-%COMP%]:hover   .card_prize[_ngcontent-%COMP%]{z-index:20}.custom-shape[_ngcontent-%COMP%]{clip-path:polygon(0% 0%,100% 0%,100% 80%,50% 100%,0% 80%)}button[_ngcontent-%COMP%]:hover{cursor:pointer}.overflow-auto[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.img_parent[_ngcontent-%COMP%]:hover   .team-name[_ngcontent-%COMP%]{opacity:1}.overflow-auto[_ngcontent-%COMP%]{scrollbar-width:thin;scrollbar-color:transparent transparent}",
              ],
            }));
          }
          return i;
        })(),
        Je = (() => {
          class i {
            constructor(t, o) {
              (this.cloudinaryService = t),
                (this.winnerModalService = o),
                (this.winners = []),
                (this.track_winners = []),
                (this.title_winners = ""),
                (this.desc_track_winners = ""),
                (this.desc_winners = ""),
                (this.title_track_winners = ""),
                (this.isModalOpen = !1),
                (this.modalContent = {});
            }
            openModal(t) {
              this.winnerModalService.toggleModal(!0, t);
            }
            ngOnInit() {
              (this.kurio_img =
                this.cloudinaryService.generateImageUrl("Hackathon/kurioo")),
                (this.cognipath = this.cloudinaryService.generateImageUrl(
                  "Hackathon/cognipath"
                )),
                (this.yyeni =
                  this.cloudinaryService.generateImageUrl("Hackathon/yyeni")),
                (this.title_track_winners = "Meet 2023 track winners"),
                (this.title_winners = "Meet 2023 winner projects"),
                (this.desc_winners =
                  "The Top 3 Teams, who stood out from across Africa. Their projects, acknowledged as the best, present scalable initiatives, addressing challenges and providing solutions for communities in Africa."),
                (this.desc_track_winners =
                  "The Track Winners teams are recognized for outstanding projects that made impactful contributions to African communities."),
                (this.winners = [
                  {
                    teamMembers: [
                      "Miriam Shikongo",
                      "Vitalis P Haupindi",
                      "Lotto N Nanghonda Jr",
                    ],
                    projectname: "YYeni AI",
                    team: "YYeni AI",
                    money: "6,000",
                    rank: 2,
                    awrd_img: "assets/silver 1 (no bg).png",
                    img: "https://res.cloudinary.com/eskalate/image/upload/w_850,h_650,c_thumb/v1700746297/Hackathon/yyeni.jpg",
                    countries: ["Namibia"],
                    description:
                      "AI chatbot for an enhanced educational experience through inquiry-based learning and customizable content. ",
                    teamImage: [
                      "https://res.cloudinary.com/eskalate/image/upload/v1701068390/Hackathon/yyeni/On.jpg",
                      "https://res.cloudinary.com/eskalate/image/upload/v1701068412/Hackathon/yyeni/Tw.jpg",
                      "https://res.cloudinary.com/eskalate/image/upload/v1701068391/Hackathon/yyeni/Thr.jpg",
                    ],
                    demo: "https://www.youtube.com/embed/lhVff0IBnOY?si=S1_gEIo48Xjo-BC-",
                    pitch:
                      "https://www.youtube.com/embed/ZoYZDrZN1SY?si=osdo2FZf28eeRa_0",
                    webUrl: "https://yyenichat.com/",
                    prize_description: [
                      "Team YYeni AI enjoyed a fully-covered trip to Addis Ababa, including airfare, hotel, and other expenses. They had the valuable opportunity to pitch their project idea to renowned individuals and venture capitalists. Additionally, they received a certificate of achievement, and a direct placement opportunity in the A2SV education Cohort 5.",
                    ],
                    linkedin: [
                      "https://www.linkedin.com/in/miriam-shikongo-41b2a8224",
                      "https://www.linkedin.com/in/vitalis-p-haupindi-6964b5216",
                      "https://www.linkedin.com/in/lotto-n-nanghonda-jr-727436247",
                    ],
                  },
                  {
                    teamMembers: [
                      "Aya Omezzine",
                      "Christian Parfait ",
                      "MohamedAziz Omezine",
                      "Mohamed Regaya",
                      "Ghada Eladeb",
                    ],
                    team: "The Siblings",
                    projectname: "CogniPath",
                    money: "10,000",
                    rank: 1,
                    img: "https://res.cloudinary.com/eskalate/image/upload/w_850,h_650,c_thumb/v1700745279/Hackathon/cognipath.jpg",
                    awrd_img: "assets/gold 1 (no bg).png",
                    countries: ["Tunisia", "Cameroon"],
                    description:
                      "AI-powered platform creates learning materials for students with learning disorders.",
                    teamImage: [
                      "https://res.cloudinary.com/eskalate/image/upload/v1700844082/Hackathon/cognipath/aya.png",
                      "https://res.cloudinary.com/eskalate/image/upload/v1700844082/Hackathon/cognipath/Christian.png",
                      "https://res.cloudinary.com/eskalate/image/upload/v1700844082/Hackathon/cognipath/Mohamed.png",
                      "https://res.cloudinary.com/eskalate/image/upload/v1700844082/Hackathon/cognipath/Rebaya.png",
                      "https://res.cloudinary.com/eskalate/image/upload/v1700844082/Hackathon/cognipath/Ghada.png",
                    ],
                    demo: "https://www.youtube.com/embed/SIjvIMWqgDs?si=ZVHTL7YUAN00sYgi",
                    pitch:
                      "https://www.youtube.com/embed/5fKccJiX_8I?si=7TA69lVH6Ni494p8",
                    webUrl: "https://cognipath.azurewebsites.net/",
                    prize_description: [
                      "Team CogniPath enjoyed a fully-covered trip to Addis Ababa, including airfare, hotel, and other expenses. They had the opportunity to pitch their project to renowned individuals and venture capitalists. Along with a certificate of achievement and direct placement in the A2SV education cohort 5, the team will work with Modus Capital for personalized fundraising support and one-on-one expert guidance, elevating their project and early start-up.",
                    ],
                    linkedin: [
                      "https://www.linkedin.com/in/aya-omezzine-722679174",
                      "https://www.linkedin.com/in/christian-parfait-nebot-fonkou",
                      "https://www.linkedin.com/in/mohamed-aziz-omezine-63491a116",
                      "https://www.linkedin.com/in/regaya-mohamed-462992218",
                      "https://www.linkedin.com/in/ghada-eladeb-3b2854237",
                    ],
                  },
                  {
                    teamMembers: [
                      "Kamel Brouthen",
                      "Aymene Berriche",
                      "Mehdi Zakaria ",
                      "Ahmed Yacine ",
                      "Moussaab Badla",
                    ],
                    team: " FutureX",
                    projectname: "Kurio",
                    money: "4,000",
                    rank: 3,
                    awrd_img: "assets/bronze 1.png",
                    img: "https://res.cloudinary.com/eskalate/image/upload/w_850,h_650,c_thumb/v1700741675/Hackathon/kurioo.jpg",
                    countries: ["Algeria"],
                    description:
                      "An AI-powered app for personalized and interactive children's learning and entertainment.",
                    teamImage: [
                      "https://res.cloudinary.com/eskalate/image/upload/v1701070974/Hackathon/kurio/Kamel.png",
                      "https://res.cloudinary.com/eskalate/image/upload/v1701070974/Hackathon/kurio/Aymen.png",
                      "https://res.cloudinary.com/eskalate/image/upload/v1701070975/Hackathon/kurio/mehdi.png",
                      "https://res.cloudinary.com/eskalate/image/upload/v1701070974/Hackathon/kurio/Ahmed.png",
                      "https://res.cloudinary.com/eskalate/image/upload/v1701070975/Hackathon/kurio/Moussaab.png",
                    ],
                    demo: "https://www.youtube.com/embed/BLcX8sRU-aE?si=wYdkUaKh9Xkhr4bI",
                    pitch:
                      "https://www.youtube.com/embed/fWRPbIW21J0?si=JdjMRhojDF052ltO",
                    mobileUrl:
                      "https://drive.google.com/file/d/1CG6WzV7HpjxxOY_Ti6j8EgS4NJT75vpN/view?usp=drive_link",
                    prize_description: [
                      "Team Kurio enjoyed an all-inclusive trip to Addis Ababa, covering airfare, hotel, and additional expenses. They seized the opportunity to pitch their project to esteemed individuals and venture capitalists. The team received a certificate of achievement and secured a direct placement in the A2SV education cohort 5, fostering valuable educational opportunities.",
                    ],
                    linkedin: [
                      "https://www.linkedin.com/in/brouthen-kamel",
                      "https://www.linkedin.com/in/aymen-berriche-372ba81a5",
                      "https://www.linkedin.com/in/adjal-mehdi-zakaria-a40a39223",
                      "https://www.linkedin.com/in/ahmedyacinebouchouareb",
                      "https://www.linkedin.com/in/moussaab-badla-16b398291",
                    ],
                  },
                ]),
                (this.track_winners = [
                  {
                    teamMembers: [
                      "Aser Hailu",
                      "Biruk Mesfin",
                      "Bisrat Kebere",
                      "Duresa Feyisa",
                      "Estifanos Samson",
                    ],
                    prize_type: "Best Technical Implementation Award",
                    money: "2,500",
                    team: "Innovate Fusion",
                    projectname: "THE ARCHITECT AI",
                    prize_description:
                      "Congratulations to Team Innovate Fusion from Ethiopia! We proudly acknowledge the ARCHITECT AI project, which stood out for its remarkable and innovative technical implementation.",
                    rank: 1,
                    awrd_img: "assets/gold 1 (no bg).png",
                    img: "https://res.cloudinary.com/eskalate/image/upload/w_850,h_650,c_thumb/v1700743904/Hackathon/Architect.jpg",
                    teamImage: [
                      "https://res.cloudinary.com/eskalate/image/upload/v1700843866/Hackathon/architect/aserr.png",
                      "https://res.cloudinary.com/eskalate/image/upload/v1700843866/Hackathon/architect/birukk.png",
                      "https://res.cloudinary.com/eskalate/image/upload/v1700843866/Hackathon/architect/bisratt.png",
                      "https://res.cloudinary.com/eskalate/image/upload/v1700843866/Hackathon/architect/duresaa.png",
                      "https://res.cloudinary.com/eskalate/image/upload/v1700843866/Hackathon/architect/estifanos.png",
                    ],
                    description:
                      "Virtual architectural design assistant that uses generative AI to generate customizable and sustainable skyscraper designs for architecture and construction projects in Africa.",
                    countries: ["Ethiopia"],
                    demo: "https://www.youtube.com/embed/irHZkTfRL2c?si=1g-5WDz6Bx1L39zS",
                    pitch:
                      "https://www.youtube.com/embed/AvpUPbTf7HE?si=7USncKJOg2-K1_8Q",
                    webUrl: "https://architect-ai-theta.vercel.app/home",
                    mobileUrl:
                      "https://drive.google.com/file/d/1E7CKANKvaY6yh-VKgUTdcSc6QxCS8K6r/view?usp=drive_link",
                    linkedin: [
                      "https://www.linkedin.com/in/aser-hailu",
                      "https://www.linkedin.com/in/biruk-mesfin",
                      "https://www.linkedin.com/in/bisry",
                      "https://www.linkedin.com/in/duresa-feyisa-513271256",
                      "https://www.linkedin.com/in/estifanos-samson-7286bb298",
                    ],
                  },
                  {
                    teamMembers: [
                      "Miriam Shikongo",
                      "Vitalis P Haupindi",
                      "Lotto N Nanghonda Jr",
                    ],
                    prize_type: "Most Potential for Positive Change Award",
                    money: "2,500",
                    prize_description:
                      "Congratulations to Team YYeni AI from Namibia! We commend the YYeni AI project, which stood out for its exceptional potential to make a positive impact and drive meaningful change.",
                    projectname: "YYeni AI",
                    team: "YYeni AI",
                    awrd_img: "assets/gold 1 (no bg).png",
                    rank: 1,
                    img: "https://res.cloudinary.com/eskalate/image/upload/w_850,h_650,c_thumb/v1700746297/Hackathon/yyeni.jpg",
                    countries: ["Namibia"],
                    description:
                      "AI chatbot for an enhanced educational experience through inquiry-based learning and customizable content. ",
                    teamImage: [
                      "https://res.cloudinary.com/eskalate/image/upload/v1701068390/Hackathon/yyeni/On.jpg",
                      "https://res.cloudinary.com/eskalate/image/upload/v1701068412/Hackathon/yyeni/Tw.jpg",
                      "https://res.cloudinary.com/eskalate/image/upload/v1701068391/Hackathon/yyeni/Thr.jpg",
                    ],
                    demo: "https://www.youtube.com/embed/lhVff0IBnOY?si=S1_gEIo48Xjo-BC-",
                    pitch:
                      "https://www.youtube.com/embed/ZoYZDrZN1SY?si=osdo2FZf28eeRa_0",
                    webUrl: "https://yyenichat.com/",
                    linkedin: [
                      "https://www.linkedin.com/in/miriam-shikongo-41b2a8224",
                      "https://www.linkedin.com/in/vitalis-p-haupindi-6964b5216",
                      "https://www.linkedin.com/in/lotto-n-nanghonda-jr-727436247",
                    ],
                  },
                  {
                    teamMembers: [
                      "Ann Mumbi",
                      "Franklin Karanja",
                      "Jude Ang'Edu",
                      "Nathan Mbugua",
                      "Wayne Asava",
                    ],
                    prize_type: "Best User Experience Award",
                    money: "2,500",
                    awrd_img: "assets/gold 1 (no bg).png",
                    team: "Sapphire",
                    projectname: "StoryCraft",
                    prize_description:
                      "Congratulations to Team Sapphire from Kenya! We applaud the outstanding achievement of the StoryCraft project, which was recognized for delivering an exceptional and intuitive user experience.",
                    rank: 1,
                    img: "https://res.cloudinary.com/eskalate/image/upload/w_850,h_650,c_thumb/v1700835115/Hackathon/sapphire.jpg",
                    teamImage: [
                      "https://res.cloudinary.com/eskalate/image/upload/v1700842689/Hackathon/sapphire/ann.png",
                      "https://res.cloudinary.com/eskalate/image/upload/v1700842689/Hackathon/sapphire/frank.png",
                      "https://res.cloudinary.com/eskalate/image/upload/v1700842689/Hackathon/sapphire/jude.png",
                      "https://res.cloudinary.com/eskalate/image/upload/v1700842689/Hackathon/sapphire/nathan.png",
                      "https://res.cloudinary.com/eskalate/image/upload/v1700842689/Hackathon/sapphire/wayne.png",
                    ],
                    description:
                      "AI-powered platform that creates personalized and engaging storybooks for early readers, fostering a love for reading among children.",
                    countries: ["Kenya"],
                    demo: "https://www.youtube.com/embed/YHBCz0VNjaA?si=AJHna8gKMUX8EAiR",
                    pitch:
                      "https://www.youtube.com/embed/d5vJMWklKpM?si=DgSCAMdTxeb99GsK",
                    webUrl: "http://www.storycraftai.tech/",
                    linkedin: [
                      "https://www.linkedin.com/in/ann-kamau-564b88216",
                      "https://www.linkedin.com/in/knurf-mutua",
                      "https://www.linkedin.com/in/jude-ang-edu-451532185",
                      "#",
                      "https://www.linkedin.com/in/wayneasava",
                    ],
                  },
                  {
                    teamMembers: [
                      "Miriam Shikongo",
                      "Vitalis P Haupindi",
                      "Lotto N Nanghonda Jr",
                    ],
                    prize_type: "Cross-Domain Collaboration Award",
                    projectname: "YYeni AI",
                    team: "YYeni AI",
                    prize_description:
                      "Congratulations to Team YYeni AI from Namibia! The YYeni project effectively combined generative AI techniques with expertise from different fields, showcasing an innovative approach.",
                    money: "2,500",
                    rank: 1,
                    awrd_img: "assets/gold 1 (no bg).png",
                    img: "https://res.cloudinary.com/eskalate/image/upload/w_850,h_650,c_thumb/v1700746297/Hackathon/yyeni.jpg",
                    countries: ["Namibia"],
                    description:
                      "AI chatbot for an enhanced educational experience through inquiry-based learning and customizable content. ",
                    teamImage: [
                      "https://res.cloudinary.com/eskalate/image/upload/v1701068390/Hackathon/yyeni/On.jpg",
                      "https://res.cloudinary.com/eskalate/image/upload/v1701068412/Hackathon/yyeni/Tw.jpg",
                      "https://res.cloudinary.com/eskalate/image/upload/v1701068391/Hackathon/yyeni/Thr.jpg",
                    ],
                    demo: "https://www.youtube.com/embed/lhVff0IBnOY?si=S1_gEIo48Xjo-BC-",
                    pitch:
                      "https://www.youtube.com/embed/ZoYZDrZN1SY?si=osdo2FZf28eeRa_0",
                    webUrl: "https://yyenichat.com/",
                    linkedin: [
                      "https://www.linkedin.com/in/miriam-shikongo-41b2a8224",
                      "https://www.linkedin.com/in/vitalis-p-haupindi-6964b5216",
                      "https://www.linkedin.com/in/lotto-n-nanghonda-jr-727436247",
                    ],
                  },
                ]);
            }
            getRankClass(t) {
              switch (t) {
                case 1:
                  return "md:mt-[-40px] bg-gradient-to-r from-amber-900 via-amber-700 to-amber-500 text-white ";
                case 2:
                  return "md:mt-[-20px] bg-gradient-to-r from-gray-400 to-gray-200 silver_custome text-black ";
                case 3:
                  return "bg-gradient-to-r from-bronze-900 via-bronze-700 to-bronze-500 text-white  ";
                default:
                  return "bg-gray-200";
              }
            }
            getButtonsClass(t) {
              switch (t) {
                case 1:
                  return "bg-gradient-to-r from-amber-900 via-amber-700 to-amber-500 text-yellow-500 ";
                case 2:
                  return "bg-gradient-to-r from-gray-400 to-gray-200 silver_custome text-purple-500 ";
                case 3:
                  return "bg-gradient-to-r from-bronze-900 via-bronze-700 to-bronze-500 text-orange-500  ";
                default:
                  return "bg-gray-200";
              }
            }
            getCardText(t) {
              switch (t) {
                case 1:
                  return " text-amber-200 ";
                case 2:
                  return " text-gray-200 ";
                case 3:
                  return " text-bronze-200  ";
                default:
                  return "bg-gray-200";
              }
            }
            static #e = (this.ɵfac = function (o) {
              return new (o || i)(e.Y36(L), e.Y36(E));
            });
            static #t = (this.ɵcmp = e.Xpm({
              type: i,
              selectors: [["app-winner"]],
              decls: 3,
              vars: 3,
              consts: [
                [
                  1,
                  "w-full",
                  "flex",
                  "flex-col",
                  "justify-center",
                  "items-center",
                  "rounded-md",
                  "m-auto",
                  "px-5",
                ],
                [1, "max-w-6xl"],
                [3, "title", "descr", "winners", "cardTouched"],
              ],
              template: function (o, n) {
                1 & o &&
                  (e.TgZ(0, "section", 0)(1, "div", 1)(
                    2,
                    "app-track-winners",
                    2
                  ),
                  e.NdJ("cardTouched", function (l) {
                    return n.openModal(l);
                  }),
                  e.qZA()()()),
                  2 & o &&
                    (e.xp6(2),
                    e.Q6J("title", n.title_winners)("descr", n.desc_winners)(
                      "winners",
                      n.winners
                    ));
              },
              dependencies: [He],
            }));
          }
          return i;
        })();
      const Le = ["videoIframe"];
      let Be = (() => {
        class i {
          constructor() {
            (this.awards = [
              "Trip to Addis Ababa, including airfare, hotel, and other expenses.",
              "Opportunity to pitch one's project idea to renowned tech individuals and venture capitalists.",
              "Certificate of achievement.",
            ]),
              (this.missionTextPart1 =
                "A2SV (Africa to Silicon Valley) is a US-based nonprofit academy igniting Africa's tech revolution with comprehensive software engineering training and tech-driven solutions"),
              (this.missionTextPart2 =
                "Through collaborations with top African universities and tech titans, A2SV has created a thriving ecosystem for emerging talent since 2019. Our program is free, breaking financial barriers, nurturing dreams, and democratizing the path to a tech-driven future."),
              (this.secondPrize = {
                place: "Second",
                prize: "6,000",
                padding: "32px",
                color: "#C0C0C0",
                image: "assets/silver 1 (no bg).png",
                awards: [
                  ...this.awards,
                  "Custom-designed A2SV swag.",
                  "Direct placement opportunity in the A2SV education cohort 5.",
                ],
              }),
              (this.firstPrize = {
                place: "First",
                prize: "10,000",
                padding: "32px",
                color: "#FFC876",
                image: "assets/gold 1 (no bg).png",
                awards: [
                  ...this.awards,
                  "Direct placement opportunity in the A2SV education cohort 5.",
                  "Custom-designed A2SV swag.",
                  "Partnership with Modus VC to assist with fundraising and tailored 1-on-1 expert support.",
                ],
              }),
              (this.thirdPrize = {
                place: "Third",
                prize: "4,000",
                padding: "32px",
                color: "#CD7F32",
                image: "assets/bronze 1.png",
                awards: [
                  ...this.awards,
                  "Direct placement opportunity in the A2SV education cohort 5.",
                ],
              }),
              (this.tracks = [
                {
                  title: "Best Technical Implementation Award",
                  description:
                    "Recognizes the project with the most impressive and innovative technical implementation.",
                  prize: "2500",
                },
                {
                  title: "Most Potential for Positive Change Award",
                  description:
                    "Highlights the project that shows the greatest potential for making a positive impact and driving change.",
                  prize: "2500",
                },
                {
                  title: "Best User Experience Award",
                  description:
                    "Rewards the project that delivers an exceptional and intuitive user experience.",
                  prize: "2500",
                },
                {
                  title: "Cross-Domain Collaboration Award",
                  description:
                    "Acknowledges teams that effectively combine AI techniques with expertise from different fields.",
                  prize: "2500",
                },
              ]),
              (this.prizes = [
                this.secondPrize,
                this.firstPrize,
                this.thirdPrize,
              ]);
          }
          ngAfterViewInit() {}
          ngOnInit() {}
          static #e = (this.ɵfac = function (o) {
            return new (o || i)();
          });
          static #t = (this.ɵcmp = e.Xpm({
            type: i,
            selectors: [["app-prizes"]],
            viewQuery: function (o, n) {
              if ((1 & o && e.Gf(Le, 5), 2 & o)) {
                let a;
                e.iGM((a = e.CRH())) && (n.videoIframe = a.first);
              }
            },
            decls: 3,
            vars: 0,
            consts: [
              [
                "id",
                "prizes",
                1,
                "flex",
                "fade",
                "min-h-screen",
                "py-10",
                "max-sm:px-2",
                "max-md:py-10",
                "max-xl:px-10",
                "px-20",
                "flex-col",
                "justify-center",
              ],
              [1, "mb-10"],
            ],
            template: function (o, n) {
              1 & o &&
                (e.TgZ(0, "section", 0),
                e._UZ(1, "app-winner")(2, "div", 1),
                e.qZA());
            },
            dependencies: [Je],
            styles: [".fade[_ngcontent-%COMP%]{transition:opacity .5s}"],
          }));
        }
        return i;
      })();
      function Pe(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 35)(1, "a", 36),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.setLinks("https://t.me/A2SVOfficial"));
            }),
            e.O4$(),
            e.TgZ(2, "svg", 37),
            e._UZ(3, "path", 10),
            e.qZA()(),
            e.kcU(),
            e.TgZ(4, "a", 38),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(
                n.setLinks("https://www.facebook.com/africatosiliconvalley")
              );
            }),
            e.O4$(),
            e.TgZ(5, "svg", 39),
            e._UZ(6, "path", 13),
            e.qZA()(),
            e.kcU(),
            e.TgZ(7, "a", 14),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(
                n.setLinks("https://www.instagram.com/a2sv_org/?hl=en")
              );
            }),
            e.O4$(),
            e.TgZ(8, "svg", 15),
            e._UZ(9, "path", 16),
            e.qZA()(),
            e.kcU(),
            e.TgZ(10, "a", 40),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.setLinks("https://twitter.com/A2_SV"));
            }),
            e.O4$(),
            e.TgZ(11, "svg", 18),
            e._UZ(12, "path", 19),
            e.qZA()(),
            e.kcU(),
            e.TgZ(13, "a", 41),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(
                n.setLinks("https://www.linkedin.com/company/a2sv/")
              );
            }),
            e.O4$(),
            e.TgZ(14, "svg", 21),
            e._UZ(15, "path", 22)(16, "circle", 23),
            e.qZA()()();
        }
      }
      function Ne(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 42)(1, "div", 43)(2, "div", 44)(3, "button", 45),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.toggleMenu());
            }),
            e.TgZ(4, "span", 29),
            e._uU(5, "Close menu"),
            e.qZA(),
            e.TgZ(6, "div", 46),
            e.O4$(),
            e.TgZ(7, "svg", 30),
            e._UZ(8, "path", 47),
            e.qZA()()()(),
            e.kcU(),
            e.TgZ(9, "div", 48)(10, "div", 49)(11, "div", 50)(12, "a", 51),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return n.scrollToSection("landing"), e.KtG(n.toggleMenu());
            }),
            e._uU(13, "Home"),
            e.qZA(),
            e.TgZ(14, "a", 51),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return n.scrollToSection("prize2024"), e.KtG(n.toggleMenu());
            }),
            e._uU(15, "\u{1f3c6} $30K Prize"),
            e.qZA(),
            e.TgZ(16, "a", 51),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return n.scrollToSection("workshops"), e.KtG(n.toggleMenu());
            }),
            e._uU(17, "Workshops "),
            e.qZA(),
            e.TgZ(18, "a", 51),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return n.scrollToSection("info"), e.KtG(n.toggleMenu());
            }),
            e._uU(19, "Timeline"),
            e.qZA(),
            e.TgZ(20, "a", 51),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return n.scrollToSection("organizers"), e.KtG(n.toggleMenu());
            }),
            e._uU(21, "Organizers"),
            e.qZA(),
            e.TgZ(22, "a", 51),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return n.scrollToSection("quarter"), e.KtG(n.toggleMenu());
            }),
            e._uU(23, "Quarterfinals"),
            e.qZA(),
            e.TgZ(24, "a", 51),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return n.scrollToSection("about-us"), e.KtG(n.toggleMenu());
            }),
            e._uU(25, "About Us"),
            e.qZA()()()()()();
        }
      }
      let De = (() => {
        class i {
          constructor(t, o, n) {
            (this.elRef = t),
              (this.modalService = o),
              (this.registerService = n),
              (this.showMenu = !1),
              (this.isModalOpenArray = !1),
              (this.currentSection = "landing"),
              (this.showMentorsModal = !1),
              (this.mentorsRegistrationLink =
                "https://a2sv.typeform.com/to/wHajkVvJ"),
              (this.showModal = !1),
              (this.dropdownVisible = !1),
              (this.showGetInvolvedModal = !0),
              (this.toggleChatEvent = new e.vpe()),
              (this.showWaitlistBanner = !0);
          }
          toggleMenu() {
            this.showMenu = !this.showMenu;
          }
          openModal(t) {
            t.stopPropagation(), this.modalService.openModal();
          }
          openRegisterModal() {
            this.registerService.openModal(),
              this.registerService.showEligibility();
          }
          onShowMentorsModal() {
            this.toggleChatEvent.emit(!1),
              (this.showMentorsModal = !0),
              (this.showGetInvolvedModal = !1),
              document.body.classList.add("overflow-hidden", "z-0"),
              document.getElementById("prizes")?.classList.add("z-0"),
              document.getElementById("prizes")?.classList.remove("z-40");
          }
          onHideModal() {
            this.toggleChatEvent.emit(!0),
              (this.showModal = !1),
              (this.showGetInvolvedModal = !0),
              (this.showMentorsModal = !1),
              document.body.classList.remove("overflow-hidden", "z-0"),
              document.getElementById("prizes")?.classList.remove("z-0"),
              document.getElementById("prizes")?.classList.add("z-40"),
              document.getElementById("partners")?.classList.remove("hidden"),
              document.getElementById("info")?.classList.remove("hidden"),
              document.getElementById("judges")?.classList.remove("hidden"),
              document
                .getElementById("eligibility")
                ?.classList.remove("hidden"),
              document.getElementById("about-us")?.classList.remove("hidden"),
              document.getElementById("footer")?.classList.remove("hidden");
          }
          scrollToSection(t) {
            this.currentSection = t;
            const o = !document.body.classList.contains("overflow-hidden"),
              n = document.getElementById(t);
            null != n && o && n.scrollIntoView({ behavior: "smooth" });
          }
          setLinks(t) {
            window.open(t, "_blank");
          }
          navigateToEligiblity() {
            window.document.getElementById("register_modal")?.close(),
              this.scrollToSection("eligibility");
          }
          toggleDropdown() {
            this.dropdownVisible = !this.dropdownVisible;
          }
          onHideWaitlistBanner() {
            this.showWaitlistBanner = !1;
          }
          static #e = (this.ɵfac = function (o) {
            return new (o || i)(e.Y36(e.SBq), e.Y36(w), e.Y36(v));
          });
          static #t = (this.ɵcmp = e.Xpm({
            type: i,
            selectors: [["app-header"]],
            inputs: { currentSection: "currentSection" },
            outputs: { toggleChatEvent: "toggleChatEvent" },
            decls: 50,
            vars: 25,
            consts: [
              [1, "fixed", "text-white", "inset-x-0", "top-0"],
              [
                "aria-label",
                "Global",
                1,
                "flex",
                "gap-x-4",
                "backdrop-blur-lg",
                "bg-black",
                "bg-opacity-30",
                "items-center",
                "justify-between",
                "border-b",
                "border-gray-600",
                "border-spacing-0.5",
                "max-md:p-2",
                "p-4",
                "lg:px-16",
              ],
              ["target", "_blank", "rel", "", 1, "cursor-pointer", 3, "click"],
              [
                "src",
                "assets/A2SV_LOGO%20(2).svg",
                "alt",
                "a2sv logo",
                1,
                "w-32",
                "max-sm:w-22",
                "max-lg:w-24",
                "max-md:w-20",
              ],
              [1, "hidden", "justify-between", "gap-x-4", "lg:flex"],
              [3, "click"],
              [1, "px-3", "hidden", "sm:flex"],
              [
                1,
                "inline-flex",
                "sm:ml-auto",
                "sm:mt-0",
                "gap-x-3",
                "items-center",
                "justify-between",
              ],
              [
                "target",
                "_blank",
                "href",
                "https://t.me/A2SVOfficial",
                1,
                "ml-2",
                "text-gray-100",
                "hover:text-indigo-600",
                "mb-1",
                3,
                "click",
              ],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "fill",
                "white",
                "viewBox",
                "0 0 24 24",
                1,
                "w-4",
                "h-4",
                "sm:w-5",
                "sm:h-5",
              ],
              [
                "d",
                "M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z",
              ],
              [
                "target",
                "_blank",
                "href",
                "https://www.facebook.com/africatosiliconvalley",
                1,
                "text-gray-100",
                "hover:text-indigo-600",
                "mr-2",
                3,
                "click",
              ],
              [
                "fill",
                "white",
                "stroke-linecap",
                "round",
                "stroke-linejoin",
                "round",
                "stroke-width",
                "2",
                "viewBox",
                "0 0 24 24",
                1,
                "w-4",
                "h-4",
                "sm:w-5",
                "sm:h-5",
              ],
              [
                "d",
                "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
              ],
              [
                "target",
                "_blank",
                "href",
                "https://www.instagram.com/a2sv_org/?hl=en",
                1,
                "text-gray-100",
                "align-middle",
                "hover:text-indigo-600",
                3,
                "click",
              ],
              [
                "fill",
                "white",
                "stroke-linecap",
                "round",
                "stroke-linejoin",
                "round",
                "stroke-width",
                "2",
                "viewBox",
                "0 0 448 512",
                1,
                "w-4",
                "h-4",
                "sm:w-5",
                "sm:h-5",
              ],
              [
                "d",
                "M224 202.66A53.34 53.34 0 10277.36 256 53.38 53.38 0 00224 202.66zm124.71-41a54 54 0 00-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31 6.43a54 54 0 00-30.41 30.41c-8.28 21-6.43 71.05-6.43 94.33s-1.85 73.27 6.47 94.34a54 54 0 0030.41 30.41c21 8.29 71 6.43 94.31 6.43s73.24 1.93 94.3-6.43a54 54 0 0030.41-30.41c8.35-21 6.43-71.05 6.43-94.33s1.92-73.26-6.43-94.33zM224 338a82 82 0 1182-82 81.9 81.9 0 01-82 82zm85.38-148.3a19.14 19.14 0 1119.13-19.14 19.1 19.1 0 01-19.09 19.18zM400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-17.12 290c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.59 1.49-132 0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61 0-132 1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.59-1.49 132 0 25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05c1.49 26.32 1.49 105.44 0 131.88z",
              ],
              [
                "target",
                "_blank",
                "href",
                "https://twitter.com/A2_SV",
                1,
                "ml-3",
                "text-gray-100",
                "hover:text-indigo-600",
                3,
                "click",
              ],
              [
                "viewBox",
                "0 0 300 300",
                "fill",
                "white",
                "xmlns",
                "http://www.w3.org/2000/svg",
                1,
                "w-3",
                "h-3",
                "sm:w-4",
                "sm:h-4",
              ],
              [
                "d",
                "M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66",
              ],
              [
                "target",
                "_blank",
                "href",
                "https://www.linkedin.com/company/a2sv/",
                1,
                "ml-3",
                "text-gray-100",
                "hover:text-indigo-600",
                3,
                "click",
              ],
              [
                "fill",
                "white",
                "stroke",
                "white",
                "stroke-linecap",
                "round",
                "stroke-linejoin",
                "round",
                "stroke-width",
                "0",
                "viewBox",
                "0 0 24 24",
                1,
                "w-4",
                "h-4",
                "sm:w-5",
                "sm:h-5",
              ],
              [
                "stroke",
                "none",
                "d",
                "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
              ],
              ["cx", "4", "cy", "4", "r", "2", "stroke", "none"],
              [1, "block", "sm:hidden", "relative"],
              [1, "text-gray-100", "hover:text-indigo-600", 3, "click"],
              [
                "class",
                "absolute flex flex-col mt-4 space-y-2 bg-black bg-opacity-30 p-3",
                4,
                "ngIf",
              ],
              [1, "flex", "lg:hidden"],
              [
                "type",
                "button",
                1,
                "-m-2.5",
                "inline-flex",
                "items-center",
                "justify-center",
                "rounded-md",
                "p-2.5",
                "text-gray-700",
                3,
                "click",
              ],
              [1, "sr-only"],
              [
                "fill",
                "none",
                "viewBox",
                "0 0 24 24",
                "stroke-width",
                "1.5",
                "stroke",
                "white",
                "aria-hidden",
                "true",
                1,
                "h-6",
                "w-6",
              ],
              [
                "stroke-linecap",
                "round",
                "stroke-linejoin",
                "round",
                "d",
                "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
              ],
              [1, "pt-10"],
              [
                "class",
                "lg:hidden relative text-white",
                "role",
                "dialog",
                "aria-modal",
                "true",
                4,
                "ngIf",
              ],
              [3, "registrationLink", "showModal", "closeModalEvent"],
              [
                1,
                "absolute",
                "flex",
                "flex-col",
                "mt-4",
                "space-y-2",
                "bg-black",
                "bg-opacity-30",
                "p-3",
              ],
              [
                "target",
                "_blank",
                "href",
                "https://t.me/A2SVOfficial",
                1,
                "text-gray-100",
                "hover:text-indigo-600",
                3,
                "click",
              ],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "fill",
                "white",
                "viewBox",
                "0 0 24 24",
                1,
                "w-4",
                "h-4",
              ],
              [
                "target",
                "_blank",
                "href",
                "https://www.facebook.com/africatosiliconvalley",
                1,
                "text-gray-100",
                "hover:text-indigo-600",
                3,
                "click",
              ],
              [
                "fill",
                "white",
                "stroke-linecap",
                "round",
                "stroke-linejoin",
                "round",
                "stroke-width",
                "2",
                "viewBox",
                "0 0 24 24",
                1,
                "w-4",
                "h-4",
              ],
              [
                "target",
                "_blank",
                "href",
                "https://twitter.com/A2_SV",
                1,
                "text-gray-100",
                "hover:text-indigo-600",
                3,
                "click",
              ],
              [
                "target",
                "_blank",
                "href",
                "https://www.linkedin.com/company/a2sv/",
                1,
                "text-gray-100",
                "hover:text-indigo-600",
                3,
                "click",
              ],
              [
                "role",
                "dialog",
                "aria-modal",
                "true",
                1,
                "lg:hidden",
                "relative",
                "text-white",
              ],
              [
                1,
                "fixed",
                "inset-y-0",
                "right-0",
                "w-full",
                "overflow-y-auto",
                "bg-black",
                "px-6",
                "py-6",
                "sm:max-w-sm",
                "sm:ring-1",
                "sm:ring-gray-900/10",
              ],
              [1, "flex", "items-center", "justify-between"],
              [
                "type",
                "button",
                1,
                "-m-2.5",
                "rounded-md",
                "p-2.5",
                "text-white",
                3,
                "click",
              ],
              [1, "text-white"],
              [
                "stroke-linecap",
                "round",
                "stroke-linejoin",
                "round",
                "d",
                "M6 18L18 6M6 6l12 12",
              ],
              [1, "mt-6", "flow-root"],
              [1, "-my-6", "divide-y", "divide-gray-500/10"],
              [1, "space-y-2", "py-6"],
              [
                1,
                "-mx-3",
                "block",
                "rounded-lg",
                "px-3",
                "py-2",
                "text-base",
                "font-semibold",
                "leading-7",
                "text-gray-200",
                "hover:bg-gray-800",
                3,
                "click",
              ],
            ],
            template: function (o, n) {
              1 & o &&
                (e.TgZ(0, "header", 0)(1, "nav", 1)(2, "a", 2),
                e.NdJ("click", function () {
                  return n.setLinks("https://a2sv.org");
                }),
                e._UZ(3, "img", 3),
                e.qZA(),
                e.TgZ(4, "div", 4)(5, "a", 5),
                e.NdJ("click", function () {
                  return n.scrollToSection("landing");
                }),
                e._uU(6, "Home"),
                e.qZA(),
                e.TgZ(7, "a", 5),
                e.NdJ("click", function () {
                  return n.scrollToSection("prize2024");
                }),
                e._uU(8, "\u{1f3c6} $30K Prize"),
                e.qZA(),
                e.TgZ(9, "a", 5),
                e.NdJ("click", function () {
                  return n.scrollToSection("quarter");
                }),
                e._uU(10, "Quarterfinals"),
                e.qZA(),
                e.TgZ(11, "a", 5),
                e.NdJ("click", function () {
                  return n.scrollToSection("workshops");
                }),
                e._uU(12, "Workshop "),
                e.qZA(),
                e.TgZ(13, "a", 5),
                e.NdJ("click", function () {
                  return n.scrollToSection("info");
                }),
                e._uU(14, "Timeline"),
                e.qZA(),
                e.TgZ(15, "a", 5),
                e.NdJ("click", function () {
                  return n.scrollToSection("organizers");
                }),
                e._uU(16, "Organizers"),
                e.qZA(),
                e.TgZ(17, "a", 5),
                e.NdJ("click", function () {
                  return n.scrollToSection("about-us");
                }),
                e._uU(18, "About Us"),
                e.qZA()(),
                e.TgZ(19, "div", 6)(20, "span", 7)(21, "a", 8),
                e.NdJ("click", function () {
                  return n.setLinks("https://t.me/A2SVOfficial");
                }),
                e.O4$(),
                e.TgZ(22, "svg", 9),
                e._UZ(23, "path", 10),
                e.qZA()(),
                e.kcU(),
                e.TgZ(24, "a", 11),
                e.NdJ("click", function () {
                  return n.setLinks(
                    "https://www.facebook.com/africatosiliconvalley"
                  );
                }),
                e.O4$(),
                e.TgZ(25, "svg", 12),
                e._UZ(26, "path", 13),
                e.qZA()(),
                e.kcU(),
                e.TgZ(27, "a", 14),
                e.NdJ("click", function () {
                  return n.setLinks(
                    "https://www.instagram.com/a2sv_org/?hl=en"
                  );
                }),
                e.O4$(),
                e.TgZ(28, "svg", 15),
                e._UZ(29, "path", 16),
                e.qZA()(),
                e.kcU(),
                e.TgZ(30, "a", 17),
                e.NdJ("click", function () {
                  return n.setLinks("https://twitter.com/A2_SV");
                }),
                e.O4$(),
                e.TgZ(31, "svg", 18),
                e._UZ(32, "path", 19),
                e.qZA()(),
                e.kcU(),
                e.TgZ(33, "a", 20),
                e.NdJ("click", function () {
                  return n.setLinks("https://www.linkedin.com/company/a2sv/");
                }),
                e.O4$(),
                e.TgZ(34, "svg", 21),
                e._UZ(35, "path", 22)(36, "circle", 23),
                e.qZA()()()(),
                e.kcU(),
                e.TgZ(37, "div", 24)(38, "button", 25),
                e.NdJ("click", function () {
                  return n.toggleDropdown();
                }),
                e._uU(39, " Medias "),
                e.qZA(),
                e.YNc(40, Pe, 17, 0, "div", 26),
                e.qZA(),
                e.TgZ(41, "div", 27)(42, "button", 28),
                e.NdJ("click", function () {
                  return n.toggleMenu();
                }),
                e.TgZ(43, "span", 29),
                e._uU(44, "Open main menu"),
                e.qZA(),
                e.O4$(),
                e.TgZ(45, "svg", 30),
                e._UZ(46, "path", 31),
                e.qZA()()()(),
                e.kcU(),
                e._UZ(47, "div", 32),
                e.YNc(48, Ne, 26, 0, "div", 33),
                e.TgZ(49, "app-mentors-registration", 34),
                e.NdJ("closeModalEvent", function () {
                  return n.onHideModal();
                }),
                e.qZA()()),
                2 & o &&
                  (e.xp6(5),
                  e.Gre(
                    "text-sm max-xl:text-[0.75rem] cursor-pointer  font-semibold leading-6 hover:text-indigo-600 nav-item ",
                    "landing" == n.currentSection.toString()
                      ? "text-indigo-600"
                      : "text-gray-200",
                    " "
                  ),
                  e.xp6(2),
                  e.Gre(
                    "text-sm max-xl:text-[0.75rem] cursor-pointer font-semibold leading-6  hover:text-indigo-600 nav-item ",
                    "prize2024" == n.currentSection.toString()
                      ? "text-indigo-600"
                      : "text-gray-200",
                    ""
                  ),
                  e.xp6(2),
                  e.Gre(
                    "text-sm max-xl:text-[0.75rem] cursor-pointer font-semibold leading-6 hover:text-indigo-600 nav-item ",
                    "quarter" == n.currentSection.toString()
                      ? "text-indigo-600"
                      : "text-gray-200",
                    ""
                  ),
                  e.xp6(2),
                  e.Gre(
                    "text-sm max-xl:text-[0.75rem] cursor-pointer  font-semibold leading-6 hover:text-indigo-600 nav-item ",
                    "workshops" == n.currentSection.toString()
                      ? "text-indigo-600"
                      : "text-gray-200",
                    " "
                  ),
                  e.xp6(2),
                  e.Gre(
                    "text-sm max-xl:text-[0.75rem] cursor-pointer font-semibold leading-6 hover:text-indigo-600 nav-item ",
                    "info" == n.currentSection.toString()
                      ? "text-indigo-600"
                      : "text-gray-200",
                    ""
                  ),
                  e.xp6(2),
                  e.Gre(
                    "text-sm max-xl:text-[0.75rem] cursor-pointer font-semibold leading-6 hover:text-indigo-600 nav-item ",
                    "organizers" == n.currentSection.toString()
                      ? "text-indigo-600"
                      : "text-gray-200",
                    ""
                  ),
                  e.xp6(2),
                  e.Gre(
                    "text-sm max-xl:text-[0.75rem] cursor-pointer font-semibold leading-6 hover:text-indigo-600 nav-item ",
                    "about-us" == n.currentSection.toString()
                      ? "text-indigo-600"
                      : "text-gray-200",
                    ""
                  ),
                  e.xp6(23),
                  e.Q6J("ngIf", n.dropdownVisible),
                  e.xp6(8),
                  e.Q6J("ngIf", n.showMenu),
                  e.xp6(1),
                  e.Q6J("registrationLink", n.mentorsRegistrationLink)(
                    "showModal",
                    n.showMentorsModal
                  ));
            },
            dependencies: [s.O5, z],
            styles: [
              ".custom-banner[_ngcontent-%COMP%]{box-shadow:0 4px 6px #80008080}.custom-button[_ngcontent-%COMP%]{border-color:#800080cc;box-shadow:0 4px 6px #80008080}",
            ],
          }));
        }
        return i;
      })();
      var y = c(4402);
      function Fe(i, r) {
        if ((1 & i && e._UZ(0, "img", 5), 2 & i)) {
          const t = e.oxw().$implicit;
          e.s9C("src", t.img, e.LSH);
        }
      }
      function Re(i, r) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Fe, 1, 1, "ng-template", 4), e.BQk()),
          2 & i)
        ) {
          const t = r.index;
          e.xp6(1), e.s9C("id", "slide-" + t);
        }
      }
      let Qe = (() => {
        class i {
          constructor() {
            (this.slides = [
              { img: "assets/Google_logo.svg" },
              { img: "assets/Bloomberg_logo.svg" },
              { img: "assets/Palantir_Technologies_logo%201.svg" },
              { img: "assets/Databricks_logo.svg" },
              { img: "assets/Meta_logo.svg" },
            ]),
              (this.slideConfig = {
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: !0,
                autoplaySpeed: 0,
                speed: 2500,
                pauseOnHover: !1,
                cssEase: "linear",
                responsive: [
                  { breakpoint: 1280, settings: { slidesToShow: 3 } },
                  { breakpoint: 1024, settings: { slidesToShow: 2 } },
                  { breakpoint: 640, settings: { slidesToShow: 1 } },
                ],
              }),
              (this.customOptions = {
                loop: !0,
                mouseDrag: !1,
                touchDrag: !1,
                pullDrag: !1,
                autoplay: !0,
                autoplayTimeout: 2500,
                autoplaySpeed: 2e3,
                autoplayHoverPause: !0,
                dots: !1,
                nav: !1,
                responsive: {
                  0: { items: 1 },
                  400: { items: 2 },
                  740: { items: 3 },
                  940: { items: 4 },
                },
              });
          }
          static #e = (this.ɵfac = function (o) {
            return new (o || i)();
          });
          static #t = (this.ɵcmp = e.Xpm({
            type: i,
            selectors: [["app-potential-partners"]],
            decls: 5,
            vars: 2,
            consts: [
              [1, "w-full", "py-8", "flex", "flex-col", "items-center"],
              [
                1,
                "sm:text-4xl",
                "text-center",
                "text-2xl",
                "font-medium",
                "mb-4",
                "text-white",
              ],
              [1, "w-full", "my-10", 3, "options"],
              [4, "ngFor", "ngForOf"],
              [
                "carouselSlide",
                "",
                "class",
                " mx-auto flex justify-center ",
                3,
                "id",
              ],
              [1, "w-full", "h-24", "py-5", "px-16", 3, "src"],
            ],
            template: function (o, n) {
              1 & o &&
                (e.TgZ(0, "section", 0)(1, "p", 1),
                e._uU(2, "Interview Partners"),
                e.qZA(),
                e.TgZ(3, "owl-carousel-o", 2),
                e.YNc(4, Re, 2, 1, "ng-container", 3),
                e.qZA()()),
                2 & o &&
                  (e.xp6(3),
                  e.Q6J("options", n.customOptions),
                  e.xp6(1),
                  e.Q6J("ngForOf", n.slides));
            },
            dependencies: [s.sg, y.Fy, y.Mp],
            styles: [
              ".owl-carousel[_ngcontent-%COMP%]   .owl-stage-outer[_ngcontent-%COMP%]{overflow:hidden}.owl-carousel[_ngcontent-%COMP%]   .owl-stage[_ngcontent-%COMP%]{display:flex;transition:transform 2s linear}.owl-carousel[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%]{flex-shrink:0}",
            ],
          }));
        }
        return i;
      })();
      const Ye = [
        {
          number: "1",
          color: "#41516C",
          title: "Registration",
          desc: "Students to register for the African-wide hackathon focused on AI.",
          year: "1 June - 15 July, 2024",
          startDate: "June 1, 2024",
          endDate: "June 15, 2024",
          final: !1,
        },
        {
          number: "2",
          color: "#3081D0",
          title: "Project Idea Submission and Filtration",
          desc: "During this phase, participants submit their project ideas for consideration. Ideas undergo thorough evaluation and filtering to ensure alignment with hackathon objectives and feasibility for development.",
          year: "8-16 July, 2024",
          startDate: "July 8, 2024",
          endDate: "July 16, 2024",
          final: !1,
        },
        {
          number: "3",
          color: "#FFB534",
          title: "Workshops",
          desc: "Our initial workshops provide participants with an in-depth understanding of AI, hackathon dynamics, and idea generation.",
          year: "13-17 July, 2024",
          startDate: "July 13, 2024",
          endDate: "July 17, 2024",
          final: !1,
        },
        {
          number: "4",
          color: "#163020",
          title: "Quarterfinals",
          desc: "Participants undertake a virtual hackathon, competing for a place among the top 30 projects and receiving expert mentorship along the way.",
          year: "19-21 July, 2024",
          startDate: "July 19, 2024",
          endDate: "July 21, 2024",
          final: !1,
        },
        {
          number: "5",
          color: "#7BD3EA",
          title: "Semifinals",
          desc: "Continued guidance from advisors help refine and optimize the projects of the remaining teams. This phase is marked by iterative feedback and project refinement.",
          year: "July 28 - September 20, 2024",
          startDate: "July 28, 2024",
          endDate: "September 20, 2024",
          final: !1,
        },
        {
          number: "6",
          color: "#41516C",
          title: "Grand Finale",
          desc: " The top 8 teams are flown to Ethiopia for an all-expense-paid in-person event. They\u2019ll compete for a total prize pool of $30,000, presenting their projects to a distinguished jury.",
          year: "12-17 October, 2024",
          startDate: "October 12, 2024",
          endDate: "October 17, 2024",
        },
      ];
      function Ge(i, r) {
        1 & i &&
          (e.ynx(0),
          e.O4$(),
          e.TgZ(1, "svg", 16),
          e._UZ(2, "path", 17)(3, "path", 18),
          e.qZA(),
          e.BQk());
      }
      function Ve(i, r) {
        1 & i &&
          (e.ynx(0),
          e.O4$(),
          e.TgZ(1, "svg", 19)(2, "circle", 20),
          e._UZ(3, "animateTransform", 21),
          e.qZA()(),
          e.BQk());
      }
      function $e(i, r) {
        if ((1 & i && e.YNc(0, Ve, 4, 0, "ng-container", 11), 2 & i)) {
          const t = e.oxw().$implicit,
            o = e.MAs(14),
            n = e.oxw();
          e.Q6J("ngIf", n.isBetweenDates(t.startDate, t.endDate))(
            "ngIfElse",
            o
          );
        }
      }
      function We(i, r) {}
      function Ke(i, r) {
        if (
          (1 & i &&
            (e.TgZ(0, "li")(1, "div", 3)(2, "div", 4),
            e.O4$(),
            e.TgZ(3, "svg", 5),
            e._UZ(4, "path", 6)(5, "path", 7),
            e.qZA(),
            e.kcU(),
            e.TgZ(6, "p", 8),
            e._uU(7),
            e.qZA()()(),
            e.TgZ(8, "div", 9)(9, "div", 10),
            e.YNc(10, Ge, 4, 0, "ng-container", 11)(
              11,
              $e,
              1,
              2,
              "ng-template",
              null,
              12,
              e.W1O
            )(13, We, 0, 0, "ng-template", null, 13, e.W1O),
            e.qZA(),
            e.TgZ(15, "span", 14),
            e._uU(16),
            e.qZA()(),
            e.TgZ(17, "div", 15),
            e._uU(18),
            e.qZA()()),
          2 & i)
        ) {
          const t = r.$implicit,
            o = e.MAs(12),
            n = e.oxw();
          e.Akn("--accent-color: " + t.color),
            e.xp6(7),
            e.Oqu(t.year),
            e.xp6(3),
            e.Q6J("ngIf", n.isPastEndDate(t.endDate))("ngIfElse", o),
            e.xp6(6),
            e.Oqu(t.title),
            e.xp6(2),
            e.hij(" ", t.desc, " ");
        }
      }
      let Xe = (() => {
          class i {
            constructor() {
              (this.years = []), (this.currentDate = new Date());
            }
            ngOnInit() {
              this.years = Ye;
            }
            closeTimelineModal() {}
            isPastEndDate(t) {
              return new Date() > new Date(t);
            }
            isBetweenDates(t, o) {
              const n = new Date(),
                a = new Date(t),
                l = new Date(o);
              return n >= a && n <= l;
            }
            static #e = (this.ɵfac = function (o) {
              return new (o || i)();
            });
            static #t = (this.ɵcmp = e.Xpm({
              type: i,
              selectors: [["app-timeline"]],
              decls: 4,
              vars: 1,
              consts: [
                [1, ""],
                [1, "overflow-auto", "py-16", "modal-scrollbar"],
                [3, "style", 4, "ngFor", "ngForOf"],
                [1, "date"],
                [1, "flex", "space-x-3", "items-center", "justify-center"],
                [
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                  "viewBox",
                  "0 0 24 24",
                  "fill",
                  "currentColor",
                  1,
                  "w-6",
                  "h-6",
                  "flex-none",
                  "text-white",
                ],
                [
                  "d",
                  "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z",
                ],
                [
                  "fill-rule",
                  "evenodd",
                  "d",
                  "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z",
                  "clip-rule",
                  "evenodd",
                ],
                [1, "pt-3"],
                [
                  1,
                  "title",
                  "flex",
                  "justify-start",
                  "items-center",
                  "text-gray-200",
                  "font-semibold",
                  "text-lg",
                  "mb-2",
                  "rounded-b-lg",
                ],
                [
                  1,
                  "w-10",
                  "h-10",
                  "mr-4",
                  "rounded-full",
                  "border",
                  "border-purple-600",
                  "p-2",
                ],
                [4, "ngIf", "ngIfElse"],
                ["checkStartDate", ""],
                ["upcomingSvg", ""],
                [1, "mr-4"],
                [1, "descr", "text-gray-400"],
                [
                  "fill",
                  "none",
                  "stroke",
                  "#7E22CE",
                  "stroke-linecap",
                  "round",
                  "stroke-linejoin",
                  "round",
                  "stroke-width",
                  "2",
                  "viewBox",
                  "0 0 24 24",
                  1,
                  "w-5",
                  "h-5",
                ],
                ["d", "M22 11.08V12a10 10 0 11-5.93-9.14"],
                ["d", "M22 4L12 14.01l-3-3"],
                [
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                  0,
                  "xmlns",
                  "xlink",
                  "http://www.w3.org/1999/xlink",
                  "width",
                  "100%",
                  "height",
                  "100%",
                  "viewBox",
                  "0 0 100 100",
                  "preserveAspectRatio",
                  "xMidYMid",
                  2,
                  "margin",
                  "auto",
                  "background",
                  "none",
                  "display",
                  "block",
                ],
                [
                  "cx",
                  "50",
                  "cy",
                  "50",
                  "r",
                  "32",
                  "stroke-width",
                  "8",
                  "stroke",
                  "#7E22CE",
                  "stroke-dasharray",
                  "50.26548245743669 50.26548245743669",
                  "fill",
                  "none",
                  "stroke-linecap",
                  "round",
                ],
                [
                  "attributeName",
                  "transform",
                  "type",
                  "rotate",
                  "repeatCount",
                  "indefinite",
                  "dur",
                  "1s",
                  "keyTimes",
                  "0;1",
                  "values",
                  "0 50 50;360 50 50",
                ],
              ],
              template: function (o, n) {
                1 & o &&
                  (e.TgZ(0, "div", 0)(1, "div", 1)(2, "ul"),
                  e.YNc(3, Ke, 19, 7, "li", 2),
                  e.qZA()()()),
                  2 & o && (e.xp6(3), e.Q6J("ngForOf", n.years));
              },
              dependencies: [s.sg, s.O5],
              styles: [
                'h1[_ngcontent-%COMP%]{text-align:center}ul[_ngcontent-%COMP%]{--col-gap: 2rem;--row-gap: 2rem;--line-w: .25rem;display:grid;grid-template-columns:var(--line-w) 1fr;grid-auto-columns:max-content;column-gap:var(--col-gap);list-style:none;width:min(60rem,90%);margin-inline:auto}ul[_ngcontent-%COMP%]:before{content:"";grid-column:1;grid-row:1 / span 20;background:rgb(225,225,225);border-radius:calc(var(--line-w) / 2)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){margin-bottom:var(--row-gap)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{grid-column:2;--inlineP: 1.5rem;margin-inline:var(--inlineP);grid-row:span 2;display:grid;grid-template-rows:min-content min-content min-content}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{--dateH: 3rem;height:var(--dateH);margin-inline:calc(var(--inlineP) * -1);text-align:center;background-color:var(--accent-color);color:#fff;font-size:1.25rem;font-weight:700;display:grid;place-content:center;position:relative;border-radius:calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]:before{content:"";width:var(--inlineP);aspect-ratio:1;background:var(--accent-color);background-image:linear-gradient(rgba(0,0,0,.2) 100%,transparent);position:absolute;top:100%;clip-path:polygon(0 0,100% 0,0 100%);right:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .descr[_ngcontent-%COMP%]{background:var(--bgColor);position:relative;padding-inline:1.5rem}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{overflow:hidden;padding-block-start:1.5rem;padding-block-end:1rem;font-weight:500}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .descr[_ngcontent-%COMP%]{padding-block-end:1.5rem;font-weight:300}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before, ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .descr[_ngcontent-%COMP%]:before{content:"";position:absolute;width:90%;height:.5rem;background:rgba(0,0,0,.5);left:50%;border-radius:50%;filter:blur(4px);transform:translate(-50%,50%)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before{bottom:calc(100% + .125rem)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .descr[_ngcontent-%COMP%]:before{z-index:-1;bottom:.25rem}@media (min-width: 40rem){ul[_ngcontent-%COMP%]{grid-template-columns:1fr var(--line-w) 1fr}ul[_ngcontent-%COMP%]:before{grid-column:2}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd){grid-column:1}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2n){grid-column:3}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){grid-row:2/4}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd)   .date[_ngcontent-%COMP%]:before{clip-path:polygon(0 0,100% 0,100% 100%);left:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd)   .date[_ngcontent-%COMP%]:after{transform:translate(-50%,-50%);left:calc(100% + var(--col-gap) + var(--line-w) / 2)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd)   .date[_ngcontent-%COMP%]{border-radius:0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0}}.modal-scrollbar[_ngcontent-%COMP%]{scrollbar-width:thin;scrollbar-color:green blue}',
              ],
            }));
          }
          return i;
        })(),
        et = (() => {
          class i {
            constructor(t) {
              (this.sanitizer = t),
                (this.steps = [
                  {
                    number: "1",
                    title: "Registration",
                    description:
                      "Students to register for the African-wide hackathon focused on AI.",
                    date: "1 June - 6 July, 2024",
                    final: !1,
                  },
                  {
                    number: "2",
                    title: "Project Idea Submission and Filtration",
                    description:
                      "During this phase, participants submit their project ideas for consideration. Ideas undergo thorough evaluation and filtering to ensure alignment with hackathon objectives and feasibility for development.",
                    date: "8-12 July, 2024",
                    final: !1,
                  },
                  {
                    number: "3",
                    title: "Workshops",
                    description:
                      "Our initial workshops provide participants with an in-depth understanding of AI, hackathon dynamics, and idea generation.",
                    date: "13-14 July, 2024",
                    final: !1,
                  },
                  {
                    number: "4",
                    title: "Quarterfinals",
                    description:
                      "Participants undertake a virtual hackathon, competing for a place among the top 30 projects and receiving expert mentorship along the way.",
                    date: "16-20 July, 2024",
                    final: !1,
                  },
                  {
                    number: "5",
                    title: "Semifinals",
                    description:
                      "Continued guidance from advisors help refine and optimize the projects of the remaining teams. This phase is marked by iterative feedback and project refinement.",
                    date: "July 28 - September 6, 2024",
                    final: !1,
                  },
                ]),
                (this.calendarLink =
                  "https://calendar.google.com/calendar/u/0?cid=Y18wYjU0ZmZlYjIxZWFjYmNiNTZiM2RhNzkwNzMyYmY5MTg4OTdkNWJjODQzMTJlMWI3YmUzOTlmYjFhN2QzYTFlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"),
                (this.workshops = [
                  {
                    title: "AI",
                    description:
                      "Learn about the basics of AI and how it can be used to solve real-world problems.",
                    author: "Dr. David Moinina Sengeh",
                    authorDescription:
                      "Chief Innovation Officer, Government of Sierra Leone",
                    link: this.sanitizer.bypassSecurityTrustUrl(
                      "https://www.youtube.com/embed/7FlRWgVGmUA?si=M_80yBftxegmGaUz"
                    ),
                  },
                  {
                    title: "Hackathon Dynamics",
                    description:
                      "Learn about the basics of AI and how it can be used to solve real-world problems.",
                    author: "Dr. David Moinina Sengeh",
                    authorDescription:
                      "Chief Innovation Officer, Government of Sierra Leone",
                    link: this.sanitizer.bypassSecurityTrustUrl(
                      "https://www.youtube.com/embed/7FlRWgVGmUA?si=M_80yBftxegmGaUz"
                    ),
                  },
                  {
                    title: "Idea Generation",
                    description:
                      "Learn about the basics of AI and how it can be used to solve real-world problems.",
                    author: "Dr. David Moinina Sengeh",
                    authorDescription:
                      "Chief Innovation Officer, Government of Sierra Leone",
                    link: this.sanitizer.bypassSecurityTrustUrl(
                      "https://www.youtube.com/embed/7FlRWgVGmUA?si=M_80yBftxegmGaUz"
                    ),
                  },
                ]);
            }
            setActiveButton(t, o) {
              window.open(o, "_blank");
            }
            static #e = (this.ɵfac = function (o) {
              return new (o || i)(e.Y36(g.H7));
            });
            static #t = (this.ɵcmp = e.Xpm({
              type: i,
              selectors: [["app-info"]],
              decls: 37,
              vars: 0,
              consts: [
                [
                  "id",
                  "info",
                  1,
                  "min-h-screen",
                  "max-sm:py-0",
                  "py-6",
                  "max-sm:px-0",
                  "flex",
                  "flex-col",
                  "items-center",
                  "justify-center",
                ],
                [
                  1,
                  "max-w-6xl",
                  "w-full",
                  "h-full",
                  "relative",
                  "overflow-hidden",
                  "flex",
                  "flex-col",
                  "justify-center",
                  "items-center",
                ],
                [
                  "src",
                  "assets/ccchaos%20(1).svg",
                  "alt",
                  "",
                  1,
                  "absolute",
                  "z-[-10]",
                  "-left-10",
                  "-bottom-10",
                  "w-[1080px]",
                  "max-sm:w-[720px]",
                  "aspect-[1]",
                  "opacity-70",
                ],
                [
                  "src",
                  "assets/IMAGE.svg",
                  "alt",
                  "",
                  1,
                  "absolute",
                  "aspect-[1]",
                  "max-sm:hidden",
                  "top-0",
                  "right-0",
                  "max-lg:w-[240px]",
                  "w-[360px]",
                ],
                [
                  1,
                  "container",
                  "relative",
                  "max-lg:px-4",
                  "max-sm:mt-4",
                  "px-12",
                  "pt-4",
                  "mt-12",
                  "flex",
                  "flex-col",
                ],
                [
                  1,
                  "flex",
                  "flex-col",
                  "lg:flex-row",
                  "justify-center",
                  "gap-x-12",
                  "items-center",
                ],
                [
                  1,
                  "sm:py-8",
                  "flex-1",
                  "mt-4",
                  "pt-4",
                  "sm:mt-0",
                  "sm:text-left",
                ],
                [
                  1,
                  "sm:text-4xl",
                  "text-center",
                  "text-2xl",
                  "font-medium",
                  "mb-4",
                  "text-white",
                ],
                [1, "mt-3", "text-gray-300", "leading-relaxed"],
                [
                  1,
                  "text-transparent",
                  "bg-gradient-to-r",
                  "from-indigo-600",
                  "to-pink-500",
                  "bg-clip-text",
                  "animate-text",
                ],
                [
                  "href",
                  "https://form.typeform.com/to/XoEqw6vQ",
                  "target",
                  "_blank",
                ],
                [
                  1,
                  "my-5",
                  "bg-purple-700",
                  "hover:bg-purple-500",
                  "text-white",
                  "text-sm",
                  "px-4",
                  "py-2",
                  "rounded-full",
                  "transition-transform",
                  "duration-300",
                  "ease-in-out",
                  "lg:ml-5",
                  3,
                  "click",
                ],
                [
                  "src",
                  "https://res.cloudinary.com/eskalate/image/upload/v1714657509/Hackathon/certificateDay-min.jpg",
                  "alt",
                  "",
                  1,
                  "lg:w-1/2",
                  "flex-1",
                  "h-64",
                  "aspect-square",
                  "w-full",
                  "lg:h-96",
                  "sm:h-72",
                  "object-cover",
                  "object-center",
                  "rounded-xl",
                ],
                [
                  1,
                  "sm:text-4xl",
                  "mt-5",
                  "pt-5",
                  "text-center",
                  "text-2xl",
                  "font-medium",
                  "text-white",
                ],
              ],
              template: function (o, n) {
                1 & o &&
                  (e.TgZ(0, "section", 0)(1, "div", 1),
                  e._UZ(2, "img", 2)(3, "img", 3),
                  e.TgZ(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "p", 7),
                  e._uU(8, " About The Hackathon "),
                  e.qZA(),
                  e.TgZ(9, "p", 8),
                  e._uU(
                    10,
                    " Our exciting multi-stage Hackathon, starts with "
                  ),
                  e.TgZ(11, "span", 9),
                  e._uU(12, "Workshops"),
                  e.qZA(),
                  e._uU(
                    13,
                    " from 13-14 July, 2024. You'll learn about AI, hackathon dynamics, UI design and styling and project management tools. "
                  ),
                  e.qZA(),
                  e.TgZ(14, "p", 8),
                  e._uU(15, " Then, from July 19-22, compete in the "),
                  e.TgZ(16, "span", 9),
                  e._uU(17, "Quarter-finals"),
                  e.qZA(),
                  e._uU(
                    18,
                    ", a virtual hackathon where you'll aim for a spot among the top 30 projects. Throughout, expert mentors will guide you. "
                  ),
                  e.qZA(),
                  e.TgZ(19, "p", 8),
                  e._uU(20, " In the "),
                  e.TgZ(21, "span", 9),
                  e._uU(22, "Semi-finals"),
                  e.qZA(),
                  e._uU(
                    23,
                    " (July 28 - September 20, 2024), selected 32 teams will receive ongoing support to refine their projects with feedback. "
                  ),
                  e.qZA(),
                  e.TgZ(24, "p", 8),
                  e._uU(25, " The "),
                  e.TgZ(26, "span", 9),
                  e._uU(27, "Grand Finale"),
                  e.qZA(),
                  e._uU(
                    28,
                    " on October 12-17, 2024, is the ultimate showdown. The top 8 teams will fly to Ethiopia for an all-expense-paid event, competing for a $30,000 USD prize pool and presenting their projects to a distinguished jury. "
                  ),
                  e.qZA(),
                  e._UZ(29, "br"),
                  e.TgZ(30, "a", 10)(31, "button", 11),
                  e.NdJ("click", function () {
                    return n.setActiveButton(
                      "register",
                      "https://form.typeform.com/to/XoEqw6vQ"
                    );
                  }),
                  e._uU(32, " Sign up for event updates "),
                  e.qZA()()(),
                  e._UZ(33, "img", 12),
                  e.qZA()(),
                  e.TgZ(34, "p", 13),
                  e._uU(35, " Hackathon Timeline "),
                  e.qZA(),
                  e._UZ(36, "app-timeline"),
                  e.qZA()());
              },
              dependencies: [Xe],
            }));
          }
          return i;
        })();
      var u = c(95),
        k = c(1474);
      let B = (() => {
        class i {
          constructor(t) {
            this.http = t;
          }
          getIpAddress() {
            return this.http.get("https://api.ipify.org?format=json");
          }
          static #e = (this.ɵfac = function (o) {
            return new (o || i)(e.LFG(k.eN));
          });
          static #t = (this.ɵprov = e.Yz7({
            token: i,
            factory: i.ɵfac,
            providedIn: "root",
          }));
        }
        return i;
      })();
      var tt = c(6306),
        it = c(2096);
      let P = (() => {
        class i {
          constructor(t) {
            (this.httpClient = t), (this.errorMsg = "");
          }
          sendMessage(t, o) {
            return this.httpClient
              .post(
                "https://a2sv-generative-ai-hackathon-lylswf275a-zf.a.run.app/api/v1/chats",
                { ip_address: o, query: t }
              )
              .pipe(
                (0, tt.K)(
                  (n) => (
                    (this.errorMsg =
                      n.error instanceof ErrorEvent
                        ? `Error: ${n.error.message}`
                        : this.getServerErrorMessage(n)),
                    (0, it.of)({ message: this.errorMsg })
                  )
                )
              );
          }
          getServerErrorMessage(t) {
            switch (t.status) {
              case 429:
                return "You have reached your daily limit. please try again later";
              case 404:
                return "Not Found";
              case 403:
                return "Access denied";
              case 500:
                return "Unknown error has happened try again";
              case 0:
                return "Please Check Your Internet Connection";
              default:
                return "Unknown Server Error";
            }
          }
          static #e = (this.ɵfac = function (o) {
            return new (o || i)(e.LFG(k.eN));
          });
          static #t = (this.ɵprov = e.Yz7({
            token: i,
            factory: i.ɵfac,
            providedIn: "root",
          }));
        }
        return i;
      })();
      const nt = ["scrollableContainer"],
        ot = ["fullScreenScrollableContainer"];
      function rt(i, r) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 26)(1, "div", 27)(2, "div", 28),
            e._UZ(3, "img", 29),
            e.qZA()(),
            e.TgZ(4, "div", 30),
            e._UZ(5, "p", 31),
            e.qZA()()),
          2 & i)
        ) {
          const t = e.oxw().$implicit,
            o = e.oxw();
          e.xp6(5), e.Q6J("innerHTML", o.parseMessage(t.content), e.oJD);
        }
      }
      function at(i, r) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 32)(1, "div", 27)(2, "div", 28),
            e._UZ(3, "img", 33),
            e.qZA()(),
            e.TgZ(4, "div", 30)(5, "p", 34),
            e._uU(6),
            e.qZA()()()),
          2 & i)
        ) {
          const t = e.oxw().$implicit;
          e.xp6(6), e.hij(" ", t.content, " ");
        }
      }
      function st(i, r) {
        if (
          (1 & i &&
            (e.TgZ(0, "div"),
            e.YNc(1, rt, 6, 1, "div", 24)(2, at, 7, 1, "div", 25),
            e.qZA()),
          2 & i)
        ) {
          const t = r.$implicit;
          e.xp6(1),
            e.Q6J("ngIf", "bot" === t.role),
            e.xp6(1),
            e.Q6J("ngIf", "user" === t.role);
        }
      }
      function lt(i, r) {
        1 & i &&
          (e.TgZ(0, "div", 35)(1, "div", 36)(2, "div", 37),
          e._UZ(3, "div", 38)(4, "div", 39),
          e.qZA()()());
      }
      function ct(i, r) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 26)(1, "div", 27)(2, "div", 28),
            e._UZ(3, "img", 29),
            e.qZA()(),
            e.TgZ(4, "div", 40),
            e._UZ(5, "p", 31),
            e.qZA()()),
          2 & i)
        ) {
          const t = e.oxw().$implicit,
            o = e.oxw();
          e.xp6(5), e.Q6J("innerHTML", o.parseMessage(t.content), e.oJD);
        }
      }
      function dt(i, r) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 32)(1, "div", 27)(2, "div", 28),
            e._UZ(3, "img", 33),
            e.qZA()(),
            e.TgZ(4, "div", 40),
            e._uU(5),
            e.qZA()()),
          2 & i)
        ) {
          const t = e.oxw().$implicit;
          e.xp6(5), e.Oqu(t.content);
        }
      }
      function gt(i, r) {
        if (
          (1 & i &&
            (e.TgZ(0, "div"),
            e.YNc(1, ct, 6, 1, "div", 24)(2, dt, 6, 1, "div", 25),
            e.qZA()),
          2 & i)
        ) {
          const t = r.$implicit;
          e.xp6(1),
            e.Q6J("ngIf", "bot" === t.role),
            e.xp6(1),
            e.Q6J("ngIf", "user" === t.role);
        }
      }
      function ut(i, r) {
        1 & i &&
          (e.TgZ(0, "div", 35)(1, "div", 36)(2, "div", 37),
          e._UZ(3, "div", 38)(4, "div", 39),
          e.qZA()()());
      }
      let pt = (() => {
          class i {
            constructor(t, o, n, a, l, h) {
              (this.ipService = t),
                (this.chatService = o),
                (this.localStorageService = n),
                (this.sanitizer = a),
                (this.renderer = l),
                (this.cdRef = h),
                (this.isChatLoading = !1),
                (this.messages = []),
                (this.chatForm = new u.cw({
                  message: new u.NI("", [u.kI.required]),
                })),
                (this.ipAddress = ""),
                (this.closeChatEvent = new e.vpe()),
                this.localStorageService.seedData(),
                this.localStorageService._waitingResponse$.subscribe((d) => {
                  this.isChatLoading = d;
                }),
                this.localStorageService._myData$.subscribe((d) => {
                  this.messages = d;
                });
            }
            ngOnInit() {
              this.fetchIpAddress();
            }
            parseMessage(t) {
              const n = t.replace(
                /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g,
                '<button class="link-button text-blue-500 underline" data-url="$2">$1</button>'
              );
              return this.sanitizer.bypassSecurityTrustHtml(n);
            }
            fetchIpAddress() {
              this.ipService.getIpAddress().subscribe(
                (t) => {
                  this.ipAddress = t.ip;
                },
                (t) => {
                  console.error("Failed to fetch IP address:", t);
                }
              );
            }
            ngAfterViewChecked() {
              document.querySelectorAll(".link-button").forEach((o) => {
                o.hasAttribute("data-click-bound") ||
                  (this.renderer.listen(o, "click", () => {
                    const n = o.getAttribute("data-url");
                    n && this.navigateToUrl(n);
                  }),
                  o.setAttribute("data-click-bound", "true"));
              });
            }
            navigateToUrl(t) {
              window.open(t, "_blank");
            }
            closeChat() {
              this.closeChatEvent.emit();
            }
            sendMessage() {
              (this.isChatLoading = !0),
                this.localStorageService.addMessage({
                  role: "user",
                  content: this.chatForm.value.message,
                }),
                this.localStorageService.setWaitingStatus(!0);
              const t = this.chatForm.value.message;
              try {
                this.chatService
                  .sendMessage(t, this.ipAddress)
                  .subscribe((o) => {
                    (this.isChatLoading = !1),
                      this.localStorageService.setWaitingStatus(!1),
                      this.localStorageService.addMessage({
                        role: "bot",
                        content: o.message,
                      });
                  });
              } catch {
                this.isChatLoading = !1;
              }
              this.chatForm.reset();
            }
            static #e = (this.ɵfac = function (o) {
              return new (o || i)(
                e.Y36(B),
                e.Y36(P),
                e.Y36(x),
                e.Y36(g.H7),
                e.Y36(e.Qsj),
                e.Y36(e.sBO)
              );
            });
            static #t = (this.ɵcmp = e.Xpm({
              type: i,
              selectors: [["app-bot"]],
              viewQuery: function (o, n) {
                if ((1 & o && (e.Gf(nt, 5), e.Gf(ot, 5)), 2 & o)) {
                  let a;
                  e.iGM((a = e.CRH())) && (n.scrollableContainer = a.first),
                    e.iGM((a = e.CRH())) &&
                      (n.fullScreenScrollableContainer = a.first);
                }
              },
              outputs: { closeChatEvent: "closeChatEvent" },
              decls: 34,
              vars: 10,
              consts: [
                [
                  1,
                  "flex",
                  "flex-col",
                  "items-end",
                  "w-full",
                  "h-full",
                  "shadow-2xl",
                  "bg-gray-900",
                  "rounded-xl",
                ],
                [
                  1,
                  "max-lg:hidden",
                  "bg-indigo-900",
                  "w-full",
                  "text-center",
                  "text-lg",
                  "flex-none",
                  "text-white",
                  "font-semibold",
                  "rounded-t-xl",
                  "p-4",
                ],
                [
                  1,
                  "flex-1",
                  "max-lg:hidden",
                  "relative",
                  "w-full",
                  "p-6",
                  "overflow-y-auto",
                  3,
                  "scrollTop",
                ],
                ["scrollableContainer", ""],
                [1, "space-y-2"],
                [4, "ngFor", "ngForOf"],
                ["class", "w-1/2", 4, "ngIf"],
                [
                  1,
                  "max-lg:hidden",
                  "flex-none",
                  "flex",
                  "items-center",
                  "justify-between",
                  "w-full",
                  "p-3",
                  "border-t",
                  "border-opacity-10",
                  "border-white",
                  3,
                  "formGroup",
                ],
                [
                  "formControlName",
                  "message",
                  "type",
                  "text",
                  "id",
                  "chat-input",
                  "placeholder",
                  "Type your message here...",
                  "name",
                  "message",
                  1,
                  "block",
                  "text-[16px]",
                  "w-full",
                  "py-4",
                  "pl-4",
                  "mx-3",
                  "bg-gray-950",
                  "border",
                  "border-white",
                  "border-opacity-50",
                  "rounded-xl",
                  "focus:text-gray-200",
                ],
                ["id", "helpdesk-popup-submit-button", 3, "disabled", "click"],
                [
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                  "viewBox",
                  "0 0 20 20",
                  "fill",
                  "currentColor",
                  1,
                  "w-5",
                  "h-5",
                  "origin-center",
                  "text-indigo-800",
                  "transform",
                  "rotate-90",
                ],
                [
                  "d",
                  "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z",
                ],
                [
                  "role",
                  "dialog",
                  "aria-modal",
                  "true",
                  1,
                  "lg:hidden",
                  "text-white",
                  "w-full",
                ],
                [
                  1,
                  "fixed",
                  "flex",
                  "flex-col",
                  "justify-between",
                  "items-center",
                  "inset-y-0",
                  "right-0",
                  "w-full",
                  "overflow-y-auto",
                  "bg-gray-900",
                  "sm:max-w-sm",
                  "sm:ring-1",
                  "sm:ring-gray-900/10",
                ],
                [
                  1,
                  "flex",
                  "w-full",
                  "items-center",
                  "bg-indigo-900",
                  "py-6",
                  "justify-between",
                ],
                [
                  "type",
                  "button",
                  1,
                  "rounded-md",
                  "text-gray-700",
                  3,
                  "click",
                ],
                [1, "sr-only"],
                [
                  "fill",
                  "none",
                  "viewBox",
                  "0 0 24 24",
                  "stroke-width",
                  "1.5",
                  "stroke",
                  "currentColor",
                  "aria-hidden",
                  "true",
                  1,
                  "h-6",
                  "w-6",
                  "text-white",
                  "ml-4",
                ],
                [
                  "stroke-linecap",
                  "round",
                  "stroke-linejoin",
                  "round",
                  "d",
                  "M6 18L18 6M6 6l12 12",
                ],
                [1, "h-full", "p-4", "overflow-auto", 3, "scrollTop"],
                ["fullScreenScrollableContainer", ""],
                [
                  1,
                  "flex",
                  "w-full",
                  "items-center",
                  "justify-between",
                  "p-3",
                  "border-t",
                  "border-opacity-10",
                  "border-white",
                  3,
                  "formGroup",
                ],
                [
                  "formControlName",
                  "message",
                  "type",
                  "text",
                  "placeholder",
                  "Type your message here...",
                  "name",
                  "message",
                  1,
                  "flex-grow",
                  "text-[16px]",
                  "w-full",
                  "overflow-y-auto",
                  "mr-2",
                  "py-2",
                  "px-3",
                  "bg-gray-950",
                  "border",
                  "border-white",
                  "border-opacity-50",
                  "rounded-xl",
                  "text-gray-200",
                  "focus:outline-none",
                  "focus:ring-2",
                  "focus:ring-indigo-500",
                ],
                [3, "disabled", "click"],
                ["class", "chat chat-start", 4, "ngIf"],
                ["class", "chat chat-end", 4, "ngIf"],
                [1, "chat", "chat-start"],
                [1, "chat-image", "avatar"],
                [1, "w-10", "rounded-full"],
                ["src", "assets/avatar.png", "alt", "..."],
                [1, "chat-bubble"],
                [1, "break-words", 3, "innerHTML"],
                [1, "chat", "chat-end"],
                ["src", "assets/user_avatar.png", "alt", "..."],
                [1, "break-words"],
                [1, "w-1/2"],
                [
                  1,
                  "flex",
                  "items-center",
                  "mt-4",
                  "space-x-3",
                  "animate-pulse",
                  "delay-300",
                ],
                [1, ""],
                [
                  1,
                  "h-2.5",
                  "bg-gray-200",
                  "rounded-full",
                  "dark:bg-gray-700",
                  "w-32",
                  "mb-2",
                ],
                [
                  1,
                  "w-48",
                  "h-2",
                  "bg-gray-200",
                  "rounded-full",
                  "dark:bg-gray-700",
                ],
                [1, "chat-bubble", "break-words"],
              ],
              template: function (o, n) {
                if (
                  (1 & o &&
                    (e.TgZ(0, "div", 0)(1, "div", 1)(2, "p"),
                    e._uU(3, "A2SV Hackathon 2024 Bot"),
                    e.qZA()(),
                    e.TgZ(4, "div", 2, 3)(6, "div", 4),
                    e.YNc(7, st, 3, 2, "div", 5)(8, lt, 5, 0, "div", 6),
                    e.qZA()(),
                    e.TgZ(9, "form", 7),
                    e._UZ(10, "input", 8),
                    e.TgZ(11, "button", 9),
                    e.NdJ("click", function () {
                      return n.sendMessage();
                    }),
                    e.O4$(),
                    e.TgZ(12, "svg", 10),
                    e._UZ(13, "path", 11),
                    e.qZA()()(),
                    e.kcU(),
                    e.TgZ(14, "div", 12)(15, "div", 13)(16, "div", 14)(
                      17,
                      "button",
                      15
                    ),
                    e.NdJ("click", function () {
                      return n.closeChat();
                    }),
                    e.TgZ(18, "span", 16),
                    e._uU(19, "Close menu"),
                    e.qZA(),
                    e.O4$(),
                    e.TgZ(20, "svg", 17),
                    e._UZ(21, "path", 18),
                    e.qZA()(),
                    e.kcU(),
                    e.TgZ(22, "p"),
                    e._uU(23, "A2SV Hackathon 2024 Bot"),
                    e.qZA(),
                    e._UZ(24, "div"),
                    e.qZA(),
                    e.TgZ(25, "div", 19, 20),
                    e.YNc(27, gt, 3, 2, "div", 5)(28, ut, 5, 0, "div", 6),
                    e.qZA(),
                    e.TgZ(29, "form", 21),
                    e._UZ(30, "input", 22),
                    e.TgZ(31, "button", 23),
                    e.NdJ("click", function () {
                      return n.sendMessage();
                    }),
                    e.O4$(),
                    e.TgZ(32, "svg", 10),
                    e._UZ(33, "path", 11),
                    e.qZA()()()()()()),
                  2 & o)
                ) {
                  const a = e.MAs(5),
                    l = e.MAs(26);
                  e.xp6(4),
                    e.Q6J("scrollTop", a.scrollHeight),
                    e.xp6(3),
                    e.Q6J("ngForOf", n.messages),
                    e.xp6(1),
                    e.Q6J("ngIf", n.isChatLoading),
                    e.xp6(1),
                    e.Q6J("formGroup", n.chatForm),
                    e.xp6(2),
                    e.Q6J("disabled", !n.chatForm.valid),
                    e.xp6(14),
                    e.Q6J("scrollTop", l.scrollHeight),
                    e.xp6(2),
                    e.Q6J("ngForOf", n.messages),
                    e.xp6(1),
                    e.Q6J("ngIf", n.isChatLoading),
                    e.xp6(1),
                    e.Q6J("formGroup", n.chatForm),
                    e.xp6(2),
                    e.Q6J("disabled", !n.chatForm.valid);
                }
              },
              dependencies: [s.sg, s.O5, u._Y, u.Fj, u.JJ, u.JL, u.sg, u.u],
              styles: [
                ".link-button[_ngcontent-%COMP%]{color:#00f;text-decoration:underline;background:none;border:none;cursor:pointer;padding:0}.link-button[_ngcontent-%COMP%]:hover{color:#00008b}",
              ],
            }));
          }
          return i;
        })(),
        mt = (() => {
          class i {
            setActiveButton(t, o) {
              window.open(o, "_blank");
            }
            static #e = (this.ɵfac = function (o) {
              return new (o || i)();
            });
            static #t = (this.ɵcmp = e.Xpm({
              type: i,
              selectors: [["app-footer"]],
              decls: 28,
              vars: 0,
              consts: [
                [
                  1,
                  "text-gray-200",
                  "body-font",
                  "border-white",
                  "border-opacity-50",
                  "border-t",
                  "py-8",
                ],
                [
                  1,
                  "container",
                  "px-5",
                  "mx-auto",
                  "flex",
                  "items-center",
                  "sm:flex-row",
                  "flex-col",
                ],
                [
                  1,
                  "flex",
                  "max-sm:order-2",
                  "title-font",
                  "font-medium",
                  "items-center",
                  "md:justify-start",
                  "justify-center",
                  "text-gray-200",
                ],
                [1, "ml-3", "mb-3", "text-lg"],
                [
                  1,
                  "text-sm",
                  "max-sm:order-3",
                  "text-gray-200",
                  "sm:ml-4",
                  "sm:pl-4",
                  "sm:border-l-2",
                  "sm:border-gray-200",
                  "sm:py-2",
                  "sm:mt-0",
                  "mt-3",
                  3,
                  "click",
                ],
                [
                  "href",
                  "https://a2sv.org",
                  "rel",
                  "noopener noreferrer",
                  "target",
                  "_blank",
                  1,
                  "text-gray-200",
                  "ml-1",
                ],
                [1, "text-blue-500"],
                [
                  1,
                  "inline-flex",
                  "max-sm:mb-4",
                  "sm:ml-auto",
                  "sm:mt-0",
                  "gap-x-3",
                  "items-center",
                  "justify-between",
                ],
                [
                  "target",
                  "_blank",
                  "href",
                  "https://t.me/+yqzQh04AAXRjZGQ0",
                  1,
                  "ml-2",
                  "text-gray-100",
                  "hover:text-indigo-600",
                  "mb-1",
                  3,
                  "click",
                ],
                [
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                  "fill",
                  "currentColor",
                  "viewBox",
                  "0 0 24 24",
                  1,
                  "w-4",
                  "h-4",
                  "sm:w-5",
                  "sm:h-5",
                ],
                [
                  "d",
                  "M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z",
                ],
                [
                  "target",
                  "_blank",
                  "href",
                  "https://www.facebook.com/africatosiliconvalley",
                  1,
                  "text-gray-100",
                  "hover:text-indigo-600",
                  "mr-2",
                  3,
                  "click",
                ],
                [
                  "fill",
                  "currentColor",
                  "stroke-linecap",
                  "round",
                  "stroke-linejoin",
                  "round",
                  "stroke-width",
                  "2",
                  "viewBox",
                  "0 0 24 24",
                  1,
                  "w-4",
                  "h-4",
                  "sm:w-5",
                  "sm:h-5",
                ],
                [
                  "d",
                  "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                ],
                [
                  "target",
                  "_blank",
                  "href",
                  "https://www.instagram.com/a2sv_org/?hl=en",
                  1,
                  "text-gray-100",
                  "align-middle",
                  "hover:text-indigo-600",
                  3,
                  "click",
                ],
                [
                  "fill",
                  "currentColor",
                  "stroke-linecap",
                  "round",
                  "stroke-linejoin",
                  "round",
                  "stroke-width",
                  "2",
                  "viewBox",
                  "0 0 448 512",
                  1,
                  "w-4",
                  "h-4",
                  "sm:w-5",
                  "sm:h-5",
                ],
                [
                  "d",
                  "M224 202.66A53.34 53.34 0 10277.36 256 53.38 53.38 0 00224 202.66zm124.71-41a54 54 0 00-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31 6.43a54 54 0 00-30.41 30.41c-8.28 21-6.43 71.05-6.43 94.33s-1.85 73.27 6.47 94.34a54 54 0 0030.41 30.41c21 8.29 71 6.43 94.31 6.43s73.24 1.93 94.3-6.43a54 54 0 0030.41-30.41c8.35-21 6.43-71.05 6.43-94.33s1.92-73.26-6.43-94.33zM224 338a82 82 0 1182-82 81.9 81.9 0 01-82 82zm85.38-148.3a19.14 19.14 0 1119.13-19.14 19.1 19.1 0 01-19.09 19.18zM400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-17.12 290c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.59 1.49-132 0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61 0-132 1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.59-1.49 132 0 25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05c1.49 26.32 1.49 105.44 0 131.88z",
                ],
                [
                  "target",
                  "_blank",
                  "href",
                  "https://twitter.com/A2_SV",
                  1,
                  "ml-3",
                  "text-gray-100",
                  "hover:text-indigo-600",
                  3,
                  "click",
                ],
                [
                  "viewBox",
                  "0 0 300 300",
                  "fill",
                  "currentColor",
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                  1,
                  "w-3",
                  "h-3",
                  "sm:w-4",
                  "sm:h-4",
                ],
                [
                  "d",
                  "M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66",
                ],
                [
                  "target",
                  "_blank",
                  "href",
                  "https://www.linkedin.com/company/a2sv/",
                  1,
                  "ml-3",
                  "text-gray-100",
                  "hover:text-indigo-600",
                  3,
                  "click",
                ],
                [
                  "fill",
                  "currentColor",
                  "stroke",
                  "currentColor",
                  "stroke-linecap",
                  "round",
                  "stroke-linejoin",
                  "round",
                  "stroke-width",
                  "0",
                  "viewBox",
                  "0 0 24 24",
                  1,
                  "w-4",
                  "h-4",
                  "sm:w-5",
                  "sm:h-5",
                ],
                [
                  "stroke",
                  "none",
                  "d",
                  "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
                ],
                ["cx", "4", "cy", "4", "r", "2", "stroke", "none"],
              ],
              template: function (o, n) {
                1 & o &&
                  (e.TgZ(0, "footer", 0)(1, "div", 1)(2, "a", 2)(3, "span", 3),
                  e._uU(4, "A2SV Hackathon \xa0"),
                  e.qZA()(),
                  e.TgZ(5, "p", 4),
                  e.NdJ("click", function () {
                    return n.setActiveButton("signup", "https://a2sv.org");
                  }),
                  e.TgZ(6, "a", 5),
                  e._uU(7, "\xa9 Copyright 2024 "),
                  e.TgZ(8, "strong", 6),
                  e._uU(9, "A2SV Foundation"),
                  e.qZA(),
                  e._uU(10, ". All rights reserved."),
                  e.qZA()(),
                  e.TgZ(11, "span", 7)(12, "a", 8),
                  e.NdJ("click", function () {
                    return n.setActiveButton(
                      "signup",
                      "https://t.me/+yqzQh04AAXRjZGQ0"
                    );
                  }),
                  e.O4$(),
                  e.TgZ(13, "svg", 9),
                  e._UZ(14, "path", 10),
                  e.qZA()(),
                  e.kcU(),
                  e.TgZ(15, "a", 11),
                  e.NdJ("click", function () {
                    return n.setActiveButton(
                      "signup",
                      "https://www.facebook.com/africatosiliconvalley"
                    );
                  }),
                  e.O4$(),
                  e.TgZ(16, "svg", 12),
                  e._UZ(17, "path", 13),
                  e.qZA()(),
                  e.kcU(),
                  e.TgZ(18, "a", 14),
                  e.NdJ("click", function () {
                    return n.setActiveButton(
                      "signup",
                      "https://www.instagram.com/a2sv_org/?hl=en"
                    );
                  }),
                  e.O4$(),
                  e.TgZ(19, "svg", 15),
                  e._UZ(20, "path", 16),
                  e.qZA()(),
                  e.kcU(),
                  e.TgZ(21, "a", 17),
                  e.NdJ("click", function () {
                    return n.setActiveButton(
                      "signup",
                      "https://twitter.com/A2_SV"
                    );
                  }),
                  e.O4$(),
                  e.TgZ(22, "svg", 18),
                  e._UZ(23, "path", 19),
                  e.qZA()(),
                  e.kcU(),
                  e.TgZ(24, "a", 20),
                  e.NdJ("click", function () {
                    return n.setActiveButton(
                      "signup",
                      "https://www.linkedin.com/company/a2sv/"
                    );
                  }),
                  e.O4$(),
                  e.TgZ(25, "svg", 21),
                  e._UZ(26, "path", 22)(27, "circle", 23),
                  e.qZA()()()()());
              },
            }));
          }
          return i;
        })();
      function ht(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 7)(1, "a", 8),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw(2);
              return e.KtG(n.setActiveButton("a2sv", "https://www.a2sv.org"));
            }),
            e._UZ(2, "span", 9),
            e._uU(3, "Read more "),
            e.TgZ(4, "span", 10),
            e._uU(5, "\u2192"),
            e.qZA()()();
        }
        if (2 & i) {
          const t = e.oxw().$implicit;
          e.xp6(1), e.s9C("href", t.footer, e.LSH);
        }
      }
      function ft(i, r) {
        if (
          (1 & i &&
            (e.TgZ(0, "div")(1, "div"),
            e._UZ(2, "img", 3),
            e.qZA(),
            e.TgZ(3, "div")(4, "h1", 4),
            e._uU(5),
            e.qZA(),
            e.TgZ(6, "p", 5),
            e._uU(7),
            e.qZA(),
            e.TgZ(8, "p", 5),
            e._uU(9),
            e.qZA(),
            e.YNc(10, ht, 6, 1, "div", 6),
            e.qZA()()),
          2 & i)
        ) {
          const t = r.$implicit,
            o = r.index;
          e.Gre(
            "",
            o % 2 == 0
              ? "bg-gradient-to-r from-indigo-950 to-black "
              : "bg-gradient-to-l from-indigo-950 to-black",
            " container my-12  rounded-3xl mx-auto flex flex-col md:flex-row py-5 px -3"
          ),
            e.xp6(1),
            e.Gre(
              "",
              o % 2 == 0 ? "order-1 max-md:order-2" : "order-2 max-md:order-2",
              "   w-full md:w-1/2  ml-3"
            ),
            e.xp6(1),
            e.s9C("src", t.image, e.LSH),
            e.xp6(1),
            e.Gre(
              "",
              o % 2 == 0
                ? "order-2 lg:pl-24 md:pl-16  max-md:order-1"
                : "order-1 lg:pr-24 md:pr-16  max-md:order-1",
              " lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left items-center text-center"
            ),
            e.xp6(2),
            e.Oqu(t.title),
            e.xp6(2),
            e.Oqu(t.description),
            e.xp6(2),
            e.Oqu(t.description1),
            e.xp6(1),
            e.Q6J("ngIf", null != t.footer);
        }
      }
      let _t = (() => {
          class i {
            constructor() {
              this.contents = [
                {
                  title: "About A2SV",
                  description:
                    "A2SV (Africa to Silicon Valley), a hub of innovation in the field of technology education, is a US-based nonprofit academy empowering Africa's tech revolution. With a unique blend of comprehensive software engineering training and tech-driven solutions, A2SV is more than an academy; it's a movement.",
                  image: "assets/group_photo1.jpg",
                  footer: "https://www.a2sv.org",
                  description1:
                    "Through collaborations with esteemed African universities like Addis Ababa University and the University of Ghana, and partnerships with tech titans such as Google, Meta, and Databricks, A2SV has created a thriving ecosystem for emerging talent since 2019. Our program is absolutely free, breaking down financial barriers, nurturing dreams, and democratizing the path to a tech-driven future.",
                },
              ];
            }
            setActiveButton(t, o) {
              window.open(o, "_blank");
            }
            static #e = (this.ɵfac = function (o) {
              return new (o || i)();
            });
            static #t = (this.ɵcmp = e.Xpm({
              type: i,
              selectors: [["app-about-us"]],
              decls: 3,
              vars: 1,
              consts: [
                [
                  "id",
                  "about-us",
                  1,
                  "text-gray-400",
                  "bg-black",
                  "body-font",
                  "pt-24",
                  "px-5",
                  "max-md:px-4",
                  "flex",
                  "flex-col",
                  "justify-center",
                  "items-center",
                ],
                [1, "max-w-6xl"],
                [3, "class", 4, "ngFor", "ngForOf"],
                [
                  "alt",
                  "a2sv students photo",
                  1,
                  "object-cover",
                  "object-center",
                  "rounded-3xl",
                  "aspect-[720/600]",
                  3,
                  "src",
                ],
                [
                  1,
                  "title-font",
                  "sm:text-4xl",
                  "text-3xl",
                  "mb-4",
                  "font-medium",
                  "text-white",
                ],
                [1, "mb-8", "text-gray-300", "leading-relaxed"],
                [
                  "class",
                  "relative border border-white border-opacity-50 my-6 rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20",
                  4,
                  "ngIf",
                ],
                [
                  1,
                  "relative",
                  "border",
                  "border-white",
                  "border-opacity-50",
                  "my-6",
                  "rounded-full",
                  "px-3",
                  "py-1",
                  "text-sm",
                  "leading-6",
                  "text-gray-600",
                  "ring-1",
                  "ring-gray-900/10",
                  "hover:ring-gray-900/20",
                ],
                [
                  "target",
                  "_blank",
                  1,
                  "font-semibold",
                  "text-indigo-600",
                  3,
                  "href",
                  "click",
                ],
                ["aria-hidden", "true", 1, "absolute", "inset-0"],
                ["aria-hidden", "true"],
              ],
              template: function (o, n) {
                1 & o &&
                  (e.TgZ(0, "section", 0)(1, "div", 1),
                  e.YNc(2, ft, 11, 14, "div", 2),
                  e.qZA()()),
                  2 & o && (e.xp6(2), e.Q6J("ngForOf", n.contents));
              },
              dependencies: [s.sg, s.O5],
            }));
          }
          return i;
        })(),
        vt = (() => {
          class i {
            constructor(t) {
              (this.modalService = t), (this.closeModalEvent = new e.vpe());
            }
            get isModalOpen() {
              return this.modalService.isModalOpen;
            }
            closeModal() {
              this.modalService.closeModal();
            }
            static #e = (this.ɵfac = function (o) {
              return new (o || i)(e.Y36(w));
            });
            static #t = (this.ɵcmp = e.Xpm({
              type: i,
              selectors: [["app-what-we-provide"]],
              outputs: { closeModalEvent: "closeModalEvent" },
              decls: 35,
              vars: 0,
              consts: [
                [
                  1,
                  "text-gray-300",
                  "p-3",
                  "w-full",
                  "body-font",
                  "flex",
                  "flex-col",
                  "items-center",
                  "rounded-3xl",
                  "h-full",
                  "relative",
                ],
                [
                  1,
                  "absolute",
                  "z-51",
                  "top-0",
                  "right-0",
                  "h-[32px]",
                  "w-[32px]",
                  "flex",
                  "justify-center",
                  "items-center",
                  "rounded-full",
                  "bg-gray-500",
                  "p-1",
                  "hover:scale-110",
                  "transition-transform",
                  "transform-gpu",
                  3,
                  "click",
                ],
                [
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                  "width",
                  "30",
                  "height",
                  "30",
                  "viewBox",
                  "0 0 24 24",
                  "fill",
                  "none",
                  "stroke",
                  "white",
                  "stroke-width",
                  "2",
                  "stroke-linecap",
                  "round",
                  "stroke-linejoin",
                  "round",
                ],
                ["x1", "18", "y1", "6", "x2", "6", "y2", "18"],
                ["x1", "6", "y1", "6", "x2", "18", "y2", "18"],
                [
                  1,
                  "w-full",
                  "h-[80vh]",
                  "body-font",
                  "flex",
                  "flex-col",
                  "items-center",
                  "overflow-auto",
                ],
                [
                  1,
                  "container",
                  "px-5",
                  "py-12",
                  "bg-random",
                  "max-md:bg-no-repeat",
                ],
                [1, "flex", "flex-col", "text-center", "w-full", "mb-20"],
                [
                  1,
                  "sm:text-3xl",
                  "text-2xl",
                  "font-medium",
                  "title-font",
                  "mb-4",
                  "text-white",
                ],
                [
                  1,
                  "lg:w-2/3",
                  "mx-auto",
                  "text-break",
                  "text-justify",
                  "justify-between",
                ],
                [1, "flex", "flex-wrap", "justify-center"],
                [
                  1,
                  "xl:w-1/4",
                  "lg:w-full",
                  "md:w-full",
                  "sm:m-3",
                  "px-8",
                  "py-6",
                  "bg-slate-500",
                  "rounded",
                  "shadow-lg",
                  "transform",
                  "scale-100",
                  "transition-transform",
                  "duration-300",
                  "hover:scale-105",
                  "hover:bg-slate-300",
                  "hover:text-black",
                  "m-2",
                ],
                [1, "p-2", "border-gray-600", "rounded"],
                [
                  1,
                  "text-lg",
                  "sm:text-2xl",
                  "font-[700]",
                  "mb-2",
                  "group-hover:text-purple-800",
                ],
                [1, "leading-relaxed", "text-base", "mb-4"],
                [
                  1,
                  "xl:w-1/4",
                  "lg:w-full",
                  "md:w-full",
                  "sm:m-3",
                  "px-8",
                  "py-6",
                  "bg-slate-500",
                  "group",
                  "rounded",
                  "shadow-lg",
                  "transform",
                  "scale-100",
                  "transition-transform",
                  "duration-300",
                  "hover:scale-105",
                  "hover:bg-slate-300",
                  "hover:text-black",
                  "m-2",
                ],
                [1, "text-lg", "sm:text-2xl", "font-bold", "font", "mb-2"],
                [1, "leading-relaxed", "mb-4"],
                [
                  1,
                  "inline-flex",
                  "space-x-3",
                  "mb-6",
                  "justify-center",
                  "hover:border-indigo-600",
                  "border-white",
                  "border",
                  "border-opacity-50",
                  "rounded-full",
                  "px-6",
                  "py-2",
                  "text-white",
                  "hover:text-indigo-600",
                  "items-center",
                  "sm:justify-start",
                  "mt-2",
                ],
                [1, "flex", "flex-col", "justify-center"],
                [
                  "href",
                  "https://t.me/+yqzQh04AAXRjZGQ0",
                  "target",
                  "_blank",
                  1,
                  "font-semibold",
                ],
              ],
              template: function (o, n) {
                1 & o &&
                  (e.TgZ(0, "section", 0)(1, "button", 1),
                  e.NdJ("click", function () {
                    return n.closeModal();
                  }),
                  e.O4$(),
                  e.TgZ(2, "svg", 2),
                  e._UZ(3, "line", 3)(4, "line", 4),
                  e.qZA()(),
                  e.kcU(),
                  e.TgZ(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h1", 8),
                  e._uU(9, " What We Provide "),
                  e.qZA(),
                  e.TgZ(10, "p", 9),
                  e._uU(
                    11,
                    " A2SV is dedicated to advancing African students by providing accessible and free education\u2014both remote and in-person\u2014to cultivate their data structure and algorithms, communication skills and problem solving skills. Our comprehensive program begins with a community education initiative, empowering students to create impactful software projects. Beyond skill development, our ultimate goal is to upskill students, connect them with top-tier tech companies like Google, Meta, Palantir, and Databricks, and inspire them to build innovative solutions that contribute to the progress of their communities. It's not just education; it's a transformative journey toward empowerment, opportunities, and sustainable growth in Africa's tech landscape. "
                  ),
                  e.qZA()(),
                  e.TgZ(12, "div", 10)(13, "div", 11)(14, "div", 12)(
                    15,
                    "h2",
                    13
                  ),
                  e._uU(16, " Community Education "),
                  e.qZA(),
                  e.TgZ(17, "p", 14),
                  e._uU(
                    18,
                    " The Community Education Program is the entry to A2SV, allowing students to start their learning journey until the next intake season. "
                  ),
                  e.qZA()()(),
                  e.TgZ(19, "div", 15)(20, "div", 12)(21, "h2", 16),
                  e._uU(22, " In-Person Education "),
                  e.qZA(),
                  e.TgZ(23, "p", 14),
                  e._uU(
                    24,
                    " In-person program for talented students from Addis Ababa University, AASTU, and University of Ghana, offering hands-on training on campus. "
                  ),
                  e.qZA()()(),
                  e.TgZ(25, "div", 11)(26, "div", 12)(27, "h2", 16),
                  e._uU(28, " Remote Education "),
                  e.qZA(),
                  e.TgZ(29, "p", 17),
                  e._uU(
                    30,
                    " Remote education allows students from all over the world access to its high-quality education through a virtual setting. "
                  ),
                  e.qZA()()()()(),
                  e.TgZ(31, "div", 18)(32, "div", 19)(33, "a", 20),
                  e._uU(34, "Join Us"),
                  e.qZA()()()()());
              },
              styles: [
                ".border-gradient[_ngcontent-%COMP%]{border-width:4px;border-image:linear-gradient(to right,#6488e4,#ff6b81);border-image-slice:1}",
              ],
            }));
          }
          return i;
        })();
      const wt = ["cardsSection"];
      function xt(i, r) {
        1 & i && (e.O4$(), e.TgZ(0, "svg", 11), e._UZ(1, "path", 12), e.qZA());
      }
      function bt(i, r) {
        1 & i && (e.O4$(), e.TgZ(0, "svg", 13), e._UZ(1, "path", 12), e.qZA());
      }
      function yt(i, r) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 17)(1, "div", 18),
            e._UZ(2, "iframe", 19),
            e.TgZ(3, "div", 20)(4, "h1", 21),
            e._uU(5),
            e.qZA(),
            e.TgZ(6, "p", 22),
            e._uU(7),
            e.qZA()()()()),
          2 & i)
        ) {
          const t = r.$implicit;
          e.xp6(2),
            e.Q6J("src", t.src, e.uOi),
            e.xp6(3),
            e.hij(" ", t.title, " "),
            e.xp6(2),
            e.hij(" ", t.description, " ");
        }
      }
      function kt(i, r) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", null, 14)(2, "div", 15),
            e.YNc(3, yt, 8, 3, "div", 16),
            e.qZA()()),
          2 & i)
        ) {
          const t = e.oxw();
          e.xp6(3), e.Q6J("ngForOf", t.workshops_lists);
        }
      }
      let Zt = (() => {
          class i {
            constructor(t) {
              (this.sanitizer = t),
                (this.showCards = !1),
                (this.workshops_lists = [
                  {
                    title: "UI Design and Styling ",
                    description:
                      "Join us and understand the principles of user experience (UX) design and learn how to create user-friendly interfaces while staying updated with the latest trends in UI design. This workshop will focus on designing with the user in mind to enhance usability and satisfaction, and provide insights into modern visual design practices, including color theory, typography, and responsive design.",
                    src: this.sanitizer.bypassSecurityTrustResourceUrl(
                      "https://www.youtube.com/embed/t7WsFtUGTqE?si=OMPabAqBPqphZUTX"
                    ),
                  },
                  {
                    title: "Project Management Tools",
                    description:
                      "Join us as this workshop will introduce essential tools and techniques for effective collaboration. Learn about project management tools that can streamline teamwork and enhance productivity.",
                    src: this.sanitizer.bypassSecurityTrustResourceUrl(
                      "https://www.youtube.com/embed/TS61L2gXb68?si=bVgw6gwzJfM7DDat"
                    ),
                  },
                  {
                    title: "Generative AI and its Applications",
                    description:
                      "Join us and explore the various application areas of Large Language Models (LLMs) in different sectors such as environment, commerce, health, education, and more. This comprehensive workshop will delve into real-world examples and case studies demonstrating the transformative impact of LLMs across various industries.",
                    src: this.sanitizer.bypassSecurityTrustResourceUrl(
                      "https://www.youtube.com/embed/gYxDZ3N7uwA?si=xgO1wkqORkLhlbdO"
                    ),
                  },
                  {
                    title: "Pitching and Presentation Skills",
                    description:
                      "Learn how to craft compelling pitches that attract investment, including storytelling techniques and presentation skills. This workshop will help you refine your pitch to make a memorable impact on your audience.",
                    src: this.sanitizer.bypassSecurityTrustResourceUrl(
                      "https://www.youtube.com/embed/fjar3OI2HJs?si=wLFzGbgst8yhg1bE"
                    ),
                  },
                  {
                    title: "Hackathon Dynamics",
                    description:
                      "Join us and learn strategies for building strong, collaborative teams and managing team dynamics during a hackathon. This workshop will cover best practices for teamwork, communication, conflict resolution, and maximizing productivity.",
                    src: this.sanitizer.bypassSecurityTrustResourceUrl(
                      "https://www.youtube.com/embed/prTJSU2kqzI?si=1B9sItjD-hNZbwJA"
                    ),
                  },
                  {
                    title: "Project Idea Submission",
                    description:
                      "Join us and learn about the Project Idea Submission Phase and what is expected from you. This workshop is a great opportunity to learn, ask questions, and get feedback on your project ideas from experienced mentors.",
                    src: this.sanitizer.bypassSecurityTrustResourceUrl(
                      "https://www.youtube.com/embed/XNTJpjX8i00?si=1B9sItjD-hNZbwJA."
                    ),
                  },
                ]);
            }
            toggleCards() {
              (this.showCards = !this.showCards),
                this.showCards &&
                  setTimeout(() => {
                    this.scrollToCardsSection();
                  }, 0);
            }
            scrollToCardsSection() {
              console.log("scrool to section"),
                this.cardsSection.nativeElement.scrollIntoView({
                  behavior: "smooth",
                });
            }
            static #e = (this.ɵfac = function (o) {
              return new (o || i)(e.Y36(g.H7));
            });
            static #t = (this.ɵcmp = e.Xpm({
              type: i,
              selectors: [["app-workshop"]],
              viewQuery: function (o, n) {
                if ((1 & o && e.Gf(wt, 5), 2 & o)) {
                  let a;
                  e.iGM((a = e.CRH())) && (n.cardsSection = a.first);
                }
              },
              inputs: { workshop: "workshop" },
              decls: 13,
              vars: 3,
              consts: [
                [
                  "id",
                  "workshops",
                  1,
                  "m-auto",
                  "py-5",
                  "px-5",
                  "flex",
                  "flex-col",
                  "items-center",
                  "justify-center",
                ],
                [1, "max-w-6xl", "flex", "flex-col", "items-center"],
                [1, "container", "flex", "items-center", "justify-center"],
                [
                  1,
                  "mt-2",
                  "w-full",
                  "border-b",
                  "border-gray-700",
                  "flex",
                  "justify-between",
                  "items-center",
                  "cursor-pointer",
                  "mb-12",
                  "transition-transform",
                  "transform-all",
                  "hover:scale-105",
                  3,
                  "click",
                ],
                [1, "flex", "items-center", "mr-10"],
                [
                  1,
                  "sm:text-2xl",
                  "text-center",
                  "text-xl",
                  "font-bold",
                  "text-transparent",
                  "bg-gradient-to-r",
                  "from-indigo-600",
                  "to-pink-500",
                  "bg-clip-text",
                ],
                [1, "mb-2"],
                [
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                  "fill",
                  "none",
                  "viewBox",
                  "0 0 24 24",
                  "stroke-width",
                  "1.5",
                  "stroke",
                  "currentColor",
                  "class",
                  "w-8 h-8 text-pink-400",
                  4,
                  "ngIf",
                ],
                [
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                  "fill",
                  "none",
                  "viewBox",
                  "0 0 24 24",
                  "stroke-width",
                  "1.5",
                  "stroke",
                  "currentColor",
                  "class",
                  "w-8 h-8 text-pink-400 transform rotate-180",
                  4,
                  "ngIf",
                ],
                [
                  1,
                  "mx-auto",
                  "leading-relaxed",
                  "text-base",
                  "text-white",
                  "text-justify",
                  "justify-between",
                ],
                [4, "ngIf"],
                [
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                  "fill",
                  "none",
                  "viewBox",
                  "0 0 24 24",
                  "stroke-width",
                  "1.5",
                  "stroke",
                  "currentColor",
                  1,
                  "w-8",
                  "h-8",
                  "text-pink-400",
                ],
                [
                  "stroke-linecap",
                  "round",
                  "stroke-linejoin",
                  "round",
                  "d",
                  "M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5",
                ],
                [
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                  "fill",
                  "none",
                  "viewBox",
                  "0 0 24 24",
                  "stroke-width",
                  "1.5",
                  "stroke",
                  "currentColor",
                  1,
                  "w-8",
                  "h-8",
                  "text-pink-400",
                  "transform",
                  "rotate-180",
                ],
                ["cardsSection", ""],
                [
                  1,
                  "grid",
                  "grid-cols-1",
                  "md:grid-cols-2",
                  "max-sm:px-0",
                  "px-12",
                  "lg:grid-cols-3",
                  "gap-2",
                ],
                ["class", "container px-5 py-5 mx-auto", 4, "ngFor", "ngForOf"],
                [1, "container", "px-5", "py-5", "mx-auto"],
                [
                  1,
                  "h-full",
                  "border-2",
                  "border-gray-800",
                  "rounded-lg",
                  "overflow-hidden",
                ],
                [
                  1,
                  "lg:h-48",
                  "md:h-36",
                  "w-full",
                  "object-cover",
                  "object-center",
                  3,
                  "src",
                ],
                [1, "p-6"],
                [
                  1,
                  "title-font",
                  "text-lg",
                  "font-medium",
                  "text-white",
                  "mb-3",
                ],
                [1, "leading-relaxed", "mb-3", "text-gray-400"],
              ],
              template: function (o, n) {
                1 & o &&
                  (e.TgZ(0, "section", 0)(1, "div", 1)(2, "div", 2)(
                    3,
                    "div",
                    3
                  ),
                  e.NdJ("click", function () {
                    return n.toggleCards();
                  }),
                  e.TgZ(4, "span", 4)(5, "p", 5),
                  e._uU(6, " Workshops Summary "),
                  e.qZA()(),
                  e.TgZ(7, "span", 6),
                  e.YNc(8, xt, 2, 0, "svg", 7)(9, bt, 2, 0, "svg", 8),
                  e.qZA()()(),
                  e.TgZ(10, "p", 9),
                  e._uU(
                    11,
                    " Our hackathon featured a series of insightful workshops designed to equip participants with essential skills for success. Topics included preparing effective presentations, Git, GitHub, and version control, UI/UX design and prototyping, and the effective use of generative AI and AI tools. We encourage you to check out the recorded sessions of these valuable workshops to gain insights and boost your skills. Don't miss the opportunity to learn from our expert-led sessions and take your projects to the next level! "
                  ),
                  e.qZA(),
                  e.YNc(12, kt, 4, 1, "div", 10),
                  e.qZA()()),
                  2 & o &&
                    (e.xp6(8),
                    e.Q6J("ngIf", !n.showCards),
                    e.xp6(1),
                    e.Q6J("ngIf", n.showCards),
                    e.xp6(3),
                    e.Q6J("ngIf", n.showCards));
              },
              dependencies: [s.sg, s.O5],
            }));
          }
          return i;
        })(),
        Ct = (() => {
          class i {
            static #e = (this.ɵfac = function (o) {
              return new (o || i)();
            });
            static #t = (this.ɵcmp = e.Xpm({
              type: i,
              selectors: [["app-quarter"]],
              decls: 127,
              vars: 0,
              consts: [
                [
                  "id",
                  "quarter",
                  1,
                  "bg-black",
                  "m-auto",
                  "py-5",
                  "px-5",
                  "mb-16",
                  "w-full",
                  "flex",
                  "flex-col",
                  "justify-center",
                  "items-center",
                ],
                [
                  1,
                  "max-w-6xl",
                  "flex",
                  "flex-col",
                  "items-center",
                  "text-center",
                ],
                [
                  1,
                  "sm:text-4xl",
                  "text-center",
                  "text-2xl",
                  "mb-12",
                  "font-bold",
                  "text-transparent",
                  "bg-gradient-to-r",
                  "from-indigo-600",
                  "to-pink-500",
                  "bg-clip-text",
                ],
                [
                  1,
                  "mx-auto",
                  "leading-relaxed",
                  "text-base",
                  "text-white",
                  "text-justify",
                  "justify-between",
                ],
                [
                  1,
                  "font-bold",
                  "text-transparent",
                  "bg-gradient-to-r",
                  "from-indigo-600",
                  "to",
                  "to-pink-500",
                  "bg-clip-text",
                ],
                [
                  1,
                  "flex",
                  "my-10",
                  "md:mx-20",
                  "flex-col",
                  "lg:flex-col",
                  "w-full",
                ],
                [1, "flex-1"],
                [1, "flex", "md:flex-row", "flex-col", "mx-auto"],
                [
                  1,
                  "border-separate",
                  "border-spacing-2",
                  "border",
                  "border-slate-500",
                  "w-full",
                  "text-white",
                  "mb:7",
                  "lg:mb-0",
                  "md:mr-5",
                ],
                [1, "bg-gradient-to-r", "from-indigo-600", "to", "to-pink-500"],
                [1, "border", "border-slate-600", "p-2"],
                [1, "border", "border-slate-700"],
                [
                  1,
                  "border-separate",
                  "border-spacing-2",
                  "border",
                  "border-slate-500",
                  "w-full",
                  "text-white",
                  "mt-7",
                  "md:mt-0",
                  "table-fixed",
                ],
                [1, "border", "border-slate-600", "p-2", "w-3/4"],
                [1, "border", "border-slate-600", "p-2", "w-1/4"],
              ],
              template: function (o, n) {
                1 & o &&
                  (e.TgZ(0, "section", 0)(1, "div", 1)(2, "p", 2),
                  e._uU(3, " Quarterfinals Summary "),
                  e.qZA(),
                  e.TgZ(4, "p", 3),
                  e._uU(5, " The A2SV AI for Impact Hackathon attracted over "),
                  e.TgZ(6, "strong", 4),
                  e._uU(7, " 1,118 teams "),
                  e.qZA(),
                  e._uU(
                    8,
                    " from across the continent, bringing together students and mentors from "
                  ),
                  e.TgZ(9, "strong", 4),
                  e._uU(10, "48 African countries. "),
                  e.qZA(),
                  e._uU(
                    11,
                    " Participants collaborated on groundbreaking and meaningful projects, supported by "
                  ),
                  e.TgZ(12, "strong", 4),
                  e._uU(13, "47 mentors "),
                  e.qZA(),
                  e._uU(14, " from top tech companies including "),
                  e.TgZ(15, "strong", 4),
                  e._uU(16, "Google, Meta, LinkedIn, TikTok, and Huawei."),
                  e.qZA(),
                  e._uU(
                    17,
                    " The quarterfinals just concluded, showcasing innovative solutions and exceptional talent. This event not only fostered creativity and technical skills but also highlighted the potential for AI to drive impactful change across Africa. "
                  ),
                  e.qZA(),
                  e.TgZ(18, "div", 5)(19, "div", 6)(20, "div", 7)(
                    21,
                    "table",
                    8
                  )(22, "thead")(23, "tr", 9)(24, "th", 10),
                  e._uU(25, "Metric"),
                  e.qZA(),
                  e.TgZ(26, "th", 10),
                  e._uU(27, "Count"),
                  e.qZA()()(),
                  e.TgZ(28, "tbody")(29, "tr")(30, "td", 11),
                  e._uU(31, "Total Applicants"),
                  e.qZA(),
                  e.TgZ(32, "td", 11),
                  e._uU(33, "4,928"),
                  e.qZA()(),
                  e.TgZ(34, "tr")(35, "td", 11),
                  e._uU(36, "Countries Represented"),
                  e.qZA(),
                  e.TgZ(37, "td", 11),
                  e._uU(38, "48"),
                  e.qZA()(),
                  e.TgZ(39, "tr")(40, "td", 11),
                  e._uU(41, "Teams Formed"),
                  e.qZA(),
                  e.TgZ(42, "td", 11),
                  e._uU(43, "1,118"),
                  e.qZA()(),
                  e.TgZ(44, "tr")(45, "td", 11),
                  e._uU(46, "Universities and Highschools Represented"),
                  e.qZA(),
                  e.TgZ(47, "td", 11),
                  e._uU(48, "620+"),
                  e.qZA()(),
                  e.TgZ(49, "tr")(50, "td", 11),
                  e._uU(51, "Ideas Submitted"),
                  e.qZA(),
                  e.TgZ(52, "td", 11),
                  e._uU(53, "690+"),
                  e.qZA()(),
                  e.TgZ(54, "tr")(55, "td", 11),
                  e._uU(56, "Mentors and Coordinators"),
                  e.qZA(),
                  e.TgZ(57, "td", 11),
                  e._uU(58, "86"),
                  e.qZA()(),
                  e.TgZ(59, "tr")(60, "td", 11),
                  e._uU(61, "Teams Advancing to Quarterfinals"),
                  e.qZA(),
                  e.TgZ(62, "td", 11),
                  e._uU(63, "128"),
                  e.qZA()(),
                  e.TgZ(64, "tr")(65, "td", 11),
                  e._uU(66, "Quarterfinalist Countries"),
                  e.qZA(),
                  e.TgZ(67, "td", 11),
                  e._uU(68, "23"),
                  e.qZA()()()(),
                  e.TgZ(69, "table", 12)(70, "thead")(71, "tr", 9)(
                    72,
                    "th",
                    13
                  ),
                  e._uU(73, "Category"),
                  e.qZA(),
                  e.TgZ(74, "th", 14),
                  e._uU(75, "Project"),
                  e.qZA()()(),
                  e.TgZ(76, "tbody")(77, "tr")(78, "td", 11),
                  e._uU(79, "Communication and Accessibility"),
                  e.qZA(),
                  e.TgZ(80, "td", 11),
                  e._uU(81, "15"),
                  e.qZA()(),
                  e.TgZ(82, "tr")(83, "td", 11),
                  e._uU(84, "Education and Learning"),
                  e.qZA(),
                  e.TgZ(85, "td", 11),
                  e._uU(86, "17"),
                  e.qZA()(),
                  e.TgZ(87, "tr")(88, "td", 11),
                  e._uU(89, "Agriculture and Farming"),
                  e.qZA(),
                  e.TgZ(90, "td", 11),
                  e._uU(91, "22"),
                  e.qZA()(),
                  e.TgZ(92, "tr")(93, "td", 11),
                  e._uU(94, "Healthcare"),
                  e.qZA(),
                  e.TgZ(95, "td", 11),
                  e._uU(96, "25"),
                  e.qZA()(),
                  e.TgZ(97, "tr")(98, "td", 11),
                  e._uU(99, "Environmental Monitoring and Conservation"),
                  e.qZA(),
                  e.TgZ(100, "td", 11),
                  e._uU(101, "5"),
                  e.qZA()(),
                  e.TgZ(102, "tr")(103, "td", 11),
                  e._uU(104, "Data Analysis and Decision Making"),
                  e.qZA(),
                  e.TgZ(105, "td", 11),
                  e._uU(106, "8"),
                  e.qZA()(),
                  e.TgZ(107, "tr")(108, "td", 11),
                  e._uU(109, "Personalized Assistance"),
                  e.qZA(),
                  e.TgZ(110, "td", 11),
                  e._uU(111, "9"),
                  e.qZA()(),
                  e.TgZ(112, "tr")(113, "td", 11),
                  e._uU(114, "AI Driven Artistry and Innovation"),
                  e.qZA(),
                  e.TgZ(115, "td", 11),
                  e._uU(116, "1"),
                  e.qZA()(),
                  e.TgZ(117, "tr")(118, "td", 11),
                  e._uU(119, "Legal"),
                  e.qZA(),
                  e.TgZ(120, "td", 11),
                  e._uU(121, "1"),
                  e.qZA()(),
                  e.TgZ(122, "tr")(123, "td", 11),
                  e._uU(124, "AI Solutions in Other Sectors"),
                  e.qZA(),
                  e.TgZ(125, "td", 11),
                  e._uU(126, "9"),
                  e.qZA()()()()()()()()());
              },
            }));
          }
          return i;
        })();
      function Tt(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 1)(1, "div", 2)(2, "p"),
            e._uU(
              3,
              "We use cookies to improve user experience. Do you consent?"
            ),
            e.qZA(),
            e.TgZ(4, "div", 3)(5, "button", 4),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.giveConsent());
            }),
            e._uU(6, " Accept "),
            e.qZA(),
            e.TgZ(7, "button", 5),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.rejectConsent());
            }),
            e._uU(8, " Reject "),
            e.qZA()()()();
        }
      }
      let At = (() => {
        class i {
          constructor(t) {
            this.consentService = t;
          }
          ngOnInit() {
            this.consentService.getConsentStatus() ||
              this.consentService.showConsentUI(!0);
          }
          showConsent() {
            return this.consentService.shouldShowConsentUI();
          }
          giveConsent() {
            this.consentService.giveConsent();
          }
          rejectConsent() {
            this.consentService.withdrawConsent(),
              this.consentService.showConsentUI(!1);
          }
          static #e = (this.ɵfac = function (o) {
            return new (o || i)(e.Y36(b));
          });
          static #t = (this.ɵcmp = e.Xpm({
            type: i,
            selectors: [["app-consent"]],
            decls: 1,
            vars: 1,
            consts: [
              ["class", "consent-modal", 4, "ngIf"],
              [1, "consent-modal"],
              [1, "modal-content"],
              [1, "btn-container"],
              [1, "consent-btn", "accept", 3, "click"],
              [1, "consent-btn", "reject", 3, "click"],
            ],
            template: function (o, n) {
              1 & o && e.YNc(0, Tt, 9, 0, "div", 0),
                2 & o && e.Q6J("ngIf", n.showConsent());
            },
            dependencies: [s.O5],
            styles: [
              ".consent-modal[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000000b3;display:flex;justify-content:center;align-items:center;z-index:9999}.modal-content[_ngcontent-%COMP%]{background-color:#000;padding:30px;text-align:center;border-radius:10px;max-width:90%;max-height:50%}.btn-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;justify-content:space-around;margin-top:20px}.consent-text[_ngcontent-%COMP%]{color:#fff;margin-bottom:20px}.button-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.consent-btn[_ngcontent-%COMP%]{padding:10px 20px;border:2px solid transparent;border-radius:5px;color:#fff;cursor:pointer;font-size:16px}.consent-btn[_ngcontent-%COMP%]:hover{background-color:purple}.accept[_ngcontent-%COMP%]{background-color:green;margin-left:10px}.reject[_ngcontent-%COMP%]{background-color:red}",
            ],
          }));
        }
        return i;
      })();
      function Mt(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 26)(1, "a", 27),
            e.NdJ("click", function () {
              const a = e.CHM(t).index,
                l = e.oxw();
              return e.KtG(l.setLinks(l.modalData.linkedin[a]));
            }),
            e.TgZ(2, "div", 28),
            e._UZ(3, "img", 29),
            e.qZA(),
            e.TgZ(4, "p", 30),
            e._uU(5),
            e.qZA(),
            e.TgZ(6, "div", 31)(7, "div", 32),
            e._UZ(8, "img", 33),
            e.qZA()()()();
        }
        if (2 & i) {
          const t = r.$implicit,
            o = r.index,
            n = e.oxw();
          e.xp6(3),
            e.s9C("src", t, e.LSH),
            e.xp6(2),
            e.hij(" ", n.modalData.teamMembers[o].toUpperCase(), " ");
        }
      }
      function Ut(i, r) {
        if (
          (1 & i &&
            (e.TgZ(0, "div")(1, "div", 34)(2, "div", 35),
            e._UZ(3, "img", 36),
            e.qZA(),
            e.TgZ(4, "span", 37),
            e._uU(5),
            e.qZA()()()),
          2 & i)
        ) {
          const t = r.$implicit;
          e.xp6(3),
            e.Q6J("src", "assets/" + t + ".png", e.LSH)("alt", t),
            e.xp6(2),
            e.Oqu(t);
        }
      }
      function St(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "button", 38)(1, "a", 39),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.setLinks(n.modalData.demo));
            }),
            e._uU(2, "Demo"),
            e.qZA()();
        }
      }
      function It(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "button", 38)(1, "a", 40),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.setLinks(n.modalData.pitch));
            }),
            e._uU(2, "Pitch"),
            e.qZA()();
        }
      }
      function zt(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "button", 38)(1, "a", 41),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.setLinks(n.modalData.webUrl));
            }),
            e._uU(2, "Website"),
            e.qZA()();
        }
      }
      function Ot(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "button", 38)(1, "a", 41),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.setLinks(n.modalData.mobileUrl));
            }),
            e._uU(2, "Mobile"),
            e.qZA()();
        }
      }
      function qt(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "button", 38)(1, "a", 41),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.setLinks(n.modalData.slackUrl));
            }),
            e._uU(2, "Slack"),
            e.qZA()();
        }
      }
      let jt = (() => {
        class i {
          constructor(t) {
            (this.sanitizer = t),
              (this.showModal = !1),
              (this.modalData = {}),
              (this.closeModalEvent = new e.vpe());
          }
          getSanitizedUrl(t) {
            return this.sanitizer.bypassSecurityTrustUrl(t);
          }
          setLinks(t) {
            window.open(t, "_blank");
          }
          closeModal() {
            this.closeModalEvent.emit(!0);
          }
          static #e = (this.ɵfac = function (o) {
            return new (o || i)(e.Y36(g.H7));
          });
          static #t = (this.ɵcmp = e.Xpm({
            type: i,
            selectors: [["app-winner_modal"]],
            inputs: { showModal: "showModal", modalData: "modalData" },
            outputs: { closeModalEvent: "closeModalEvent" },
            decls: 42,
            vars: 11,
            consts: [
              [
                1,
                "w-full",
                "h-full",
                "flex",
                "justify-center",
                "overflow-hidden",
                "bg-white",
                "bg-opacity-30",
                "py-2",
              ],
              [
                1,
                "container",
                "relative",
                "overflow-auto",
                "grid",
                "grid-cols-1",
                "md:grid-cols-2",
                "md:flex-row",
                "w-full",
                "lg:w-[80%]",
                "lg:max-h-[90vh]",
                "bg-center",
                "bg-black",
                "rounded",
                "shadow-lg",
                "rounded-t-2xl",
                "text-gray-300",
              ],
              [
                1,
                "absolute",
                "h-[32px]",
                "w-[32px]",
                "flex",
                "justify-center",
                "items-center",
                "rounded-full",
                "bg-gray-500",
                "top-0",
                "mt-1",
                "mr-1",
                "right-0",
                "p-1",
                "hover:scale-110",
                "transition-transform",
                "transform-gpu",
                3,
                "click",
              ],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "width",
                "30",
                "height",
                "30",
                "viewBox",
                "0 0 24 24",
                "fill",
                "none",
                "stroke",
                "white",
                "stroke-width",
                "2",
                "stroke-linecap",
                "round",
                "stroke-linejoin",
                "round",
              ],
              ["x1", "18", "y1", "6", "x2", "6", "y2", "18"],
              ["x1", "6", "y1", "6", "x2", "18", "y2", "18"],
              [
                1,
                "hidden",
                "md:visible",
                "md:flex",
                "flex-col",
                "justify-start",
                "items-center",
                "p-3",
                "h-full",
                "bg-gray-500",
                "text-white",
              ],
              [
                1,
                "my-4",
                "text-center",
                "p-2",
                "md:px-5",
                "text-xl",
                "font-bold",
                "tracking-tight",
              ],
              [
                1,
                "grid",
                "grid-cols-1",
                "md:grid-cols-2",
                "gap-4",
                "mx-2",
                "overflow-auto",
                "mt-3",
              ],
              [
                "class",
                "relative group flex flex-col items-center cursor-pointer",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "p-3", "flex", "flex-col", "justify-between", "h-full"],
              [1, "p-2", "md:px-5"],
              [
                1,
                "grid",
                "grid-cols-1",
                "md:grid-cols-3",
                "gap-2",
                "mt-5",
                "justify-between",
              ],
              [
                1,
                "flex",
                "flex-col",
                "justify-center",
                "items-center",
                "h-full",
                "flex-1",
                "px-2",
                "py-3",
                "border",
                "border-gray-500",
                "rounded",
                "mr-3",
              ],
              [1, "mb-2", "font-bold", "text-xl"],
              [
                1,
                "font-bold",
                "lg:text-lg",
                "text-transparent",
                "bg-gradient-to-r",
                "from-indigo-600",
                "to",
                "to-pink-500",
                "bg-clip-text",
                "break-words",
              ],
              [
                1,
                "flex",
                "flex-col",
                "justify-center",
                "items-center",
                "h-full",
                "flex-1",
                "px-2",
                "py-3",
                "border",
                "border-gray-500",
                "mr-3",
                "rounded",
              ],
              [1, "mb-2", "break-words", "text-xl", "font-semibold"],
              [1, "mb-2", "font-semibold", "text-xl", "break-words"],
              [1, "text-sm", "md:text-lg", "mt-7", "md:mt-10", "mb-5"],
              [1, "flex", "flex-col", "justify-start"],
              [1, "my-3"],
              [1, "flex"],
              [4, "ngFor", "ngForOf"],
              [
                1,
                "border-t",
                "border-gray-800",
                "mt-3",
                "text-xs",
                "px-4",
                "flex",
                "justify-between",
                "overflow-auto",
                "py-5",
              ],
              [
                "class",
                "transition-transform duration-300 transform hover:scale-110 my-2",
                4,
                "ngIf",
              ],
              [
                1,
                "relative",
                "group",
                "flex",
                "flex-col",
                "items-center",
                "cursor-pointer",
              ],
              [
                1,
                "w-full",
                "h-full",
                "bg-gray-700",
                "p-2",
                "rounded-t-lg",
                "group-hover:bg-gray-600",
                "transition-transform",
                "transform-gpu",
                "hover:scale-105",
                "flex",
                "flex-col",
                "justify-between",
                "items-center",
                "ease-in-out",
                "duration-300",
                3,
                "click",
              ],
              [
                1,
                "w-[100px]",
                "h-[100px]",
                "lg:w-[120px]",
                "lg:h-[120px]",
                "text-center",
                "bg-gray-500",
                "p-2",
                "rounded-full",
                "transition-transform",
                "transform-gpu",
                "hover:scale-105",
                "hover:bg-gray-400",
                "ease-in-out",
                "duration-300",
              ],
              [
                "alt",
                "team",
                1,
                "bg-white",
                "w-full",
                "h-full",
                "object-cover",
                "object-center",
                "flex-shrink-0",
                "rounded-full",
                "mr-4",
                3,
                "src",
              ],
              [1, "text-center"],
              [1, "w-full", "flex", "justify-center", "items-center"],
              [1, "opacity-0", "group-hover:opacity-100", "text-white"],
              [
                "src",
                "assets/Linkedin.svg",
                "alt",
                "",
                1,
                "w-10",
                "h-6",
                "text-white",
              ],
              [1, "flex", "flex-col", "justify-center", "items-center", "mr-3"],
              [1, "w-[50px]", "h-[25px]", "mr-2", "mb-1"],
              [1, "object-cover", "w-full", "h-full", 3, "src", "alt"],
              [1, "text-xs", "text-left"],
              [
                1,
                "transition-transform",
                "duration-300",
                "transform",
                "hover:scale-110",
                "my-2",
              ],
              [
                1,
                "px-5",
                "py-3",
                "border",
                "rounded-full",
                "hover:border-none",
                "hover:bg-purple-700",
                "hover:text-white",
                3,
                "click",
              ],
              [
                1,
                "px-5",
                "py-3",
                "m-2",
                "border",
                "rounded-full",
                "hover:border-none",
                "hover:bg-purple-500",
                "hover:text-white",
                3,
                "click",
              ],
              [
                1,
                "px-5",
                "py-3",
                "m-2",
                "border",
                "rounded-full",
                "hover:border-none",
                "hover:bg-purple-700",
                "hover:text-white",
                3,
                "click",
              ],
            ],
            template: function (o, n) {
              1 & o &&
                (e.TgZ(0, "div", 0)(1, "div", 1)(2, "button", 2),
                e.NdJ("click", function () {
                  return n.closeModal();
                }),
                e.O4$(),
                e.TgZ(3, "svg", 3),
                e._UZ(4, "line", 4)(5, "line", 5),
                e.qZA()(),
                e.kcU(),
                e.TgZ(6, "div", 6)(7, "p", 7),
                e._uU(8, " Team Members "),
                e.qZA(),
                e.TgZ(9, "div", 8),
                e.YNc(10, Mt, 9, 2, "div", 9),
                e.qZA()(),
                e.TgZ(11, "div", 10)(12, "section", 11)(13, "section", 12)(
                  14,
                  "p",
                  13
                )(15, "span", 14),
                e._uU(16, "Team Name"),
                e.qZA(),
                e.TgZ(17, "strong", 15),
                e._uU(18),
                e.qZA()(),
                e.TgZ(19, "p", 16)(20, "span", 17),
                e._uU(21, "Project Name "),
                e.qZA(),
                e.TgZ(22, "strong", 15),
                e._uU(23),
                e.qZA()(),
                e.TgZ(24, "p", 16)(25, "span", 18),
                e._uU(26, "Prize "),
                e.qZA(),
                e.TgZ(27, "strong", 15),
                e._uU(28),
                e.qZA()()(),
                e.TgZ(29, "p", 19),
                e._uU(30),
                e.qZA(),
                e.TgZ(31, "div", 20)(32, "p", 21),
                e._uU(33, "Team Nationalities"),
                e.qZA(),
                e.TgZ(34, "div", 22),
                e.YNc(35, Ut, 6, 3, "div", 23),
                e.qZA()()(),
                e.TgZ(36, "div", 24),
                e.YNc(37, St, 3, 0, "button", 25)(38, It, 3, 0, "button", 25)(
                  39,
                  zt,
                  3,
                  0,
                  "button",
                  25
                )(40, Ot, 3, 0, "button", 25)(41, qt, 3, 0, "button", 25),
                e.qZA()()()()),
                2 & o &&
                  (e.xp6(10),
                  e.Q6J("ngForOf", n.modalData.teamImage),
                  e.xp6(8),
                  e.Oqu(n.modalData.team),
                  e.xp6(5),
                  e.Oqu(n.modalData.projectname),
                  e.xp6(5),
                  e.hij("$", n.modalData.money, ""),
                  e.xp6(2),
                  e.hij(" ", n.modalData.prize_description, " "),
                  e.xp6(5),
                  e.Q6J("ngForOf", n.modalData.countries),
                  e.xp6(2),
                  e.Q6J("ngIf", n.modalData.demo),
                  e.xp6(1),
                  e.Q6J("ngIf", n.modalData.pitch),
                  e.xp6(1),
                  e.Q6J("ngIf", n.modalData.webUrl),
                  e.xp6(1),
                  e.Q6J("ngIf", n.modalData.mobileUrl),
                  e.xp6(1),
                  e.Q6J("ngIf", n.modalData.slackUrl));
            },
            dependencies: [s.sg, s.O5],
            styles: [
              "[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px;height:5px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:gray}.container[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}",
            ],
          }));
        }
        return i;
      })();
      function Et(i, r) {
        1 & i &&
          (e.ynx(0),
          e.TgZ(1, "div", 21),
          e._UZ(2, "div", 22),
          e.TgZ(3, "div", 23),
          e._UZ(4, "app-what-we-provide"),
          e.qZA()(),
          e.BQk());
      }
      function Ht(i, r) {
        if (
          (1 & i && (e.TgZ(0, "div", 24), e._UZ(1, "app-header", 25), e.qZA()),
          2 & i)
        ) {
          const t = e.oxw();
          e.xp6(1), e.Q6J("currentSection", t.currentSection);
        }
      }
      function Jt(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 26)(1, "app-winner_modal", 27),
            e.NdJ("closeModalEvent", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(n.closeModal());
            }),
            e.qZA()();
        }
        if (2 & i) {
          const t = e.oxw();
          e.xp6(1), e.Q6J("showModal", t.isModalOpen)("modalData", t.modalData);
        }
      }
      function Lt(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 28)(1, "a", 29),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw();
              return e.KtG(
                n.openButton("partner", "https://form.typeform.com/to/opvWnrn7")
              );
            }),
            e.TgZ(2, "button", 30),
            e._uU(3, " Partner with us "),
            e.qZA()()();
        }
      }
      function Bt(i, r) {
        1 & i &&
          (e.TgZ(0, "div", 31)(1, "a", 32),
          e._UZ(2, "span", 33)(3, "span", 34),
          e.TgZ(4, "span", 35),
          e._uU(5, "Register Now"),
          e.qZA()()());
      }
      function Pt(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 38)(1, "app-bot", 39),
            e.NdJ("closeChatEvent", function () {
              e.CHM(t);
              const n = e.oxw(2);
              return e.KtG(n.toggleChatBtn());
            }),
            e.qZA()();
        }
      }
      function Nt(i, r) {
        1 & i &&
          (e.O4$(),
          e.TgZ(0, "svg", 43),
          e._UZ(1, "path", 44)(2, "path", 45),
          e.qZA());
      }
      function Dt(i, r) {
        1 & i && (e.O4$(), e.TgZ(0, "svg", 46), e._UZ(1, "path", 47), e.qZA());
      }
      function Ft(i, r) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "button", 40),
            e.NdJ("click", function () {
              e.CHM(t);
              const n = e.oxw(2);
              return e.KtG(n.toggleChatBtn());
            }),
            e.YNc(1, Nt, 3, 0, "svg", 41)(2, Dt, 2, 0, "svg", 42),
            e.qZA();
        }
        if (2 & i) {
          const t = e.oxw(2);
          e.xp6(1),
            e.Q6J("ngIf", !t.showChat),
            e.xp6(1),
            e.Q6J("ngIf", t.showChat);
        }
      }
      function Rt(i, r) {
        if (
          (1 & i &&
            (e.TgZ(0, "div"),
            e.YNc(1, Pt, 2, 0, "div", 36)(2, Ft, 3, 2, "button", 37),
            e.qZA()),
          2 & i)
        ) {
          const t = e.oxw();
          e.Gre(
            "fixed ",
            t.showChat ? "h-5/6 w-1/3" : "h-auto w-auto",
            " bottom-4 z-50 h-5/6 w-1/3 gap-y-4 px-5  right-4 flex flex-col  items-end  justify-end  "
          ),
            e.xp6(1),
            e.Q6J("ngIf", t.showChat),
            e.xp6(1),
            e.Q6J("ngIf", !t.isButtonAtBottom || t.showChat);
        }
      }
      function Qt(i, r) {
        1 & i && (e.TgZ(0, "button", 48), e._uU(1, " Register "), e.qZA());
      }
      let Yt = (() => {
        class i {
          constructor(t, o, n, a, l) {
            (this._el = t),
              (this.localStorage = o),
              (this.termsPluginLoaderService = n),
              (this.modalService = a),
              (this.winnerModalService = l),
              (this.showPartnerButton = !1),
              (this.isWinnerModalOpen = !1),
              (this.modalData = {}),
              (this.title = "A2SV-Hackathon"),
              (this.showChat = !1),
              (this.modalOpen = !1),
              (this.isButtonAtBottom = !1),
              (this.isStickRegisterButtonVisible = !1),
              (this.toggleChatEvent = new e.vpe()),
              (this.showModal = !1),
              (this.showTeamRegistrationModal = !1),
              (this.showIndividualRegistrationModal = !1),
              (this.showRegistrationModal = !0),
              (this.registrationDeadline = new Date(2023, 7, 31, 23, 59, 59)),
              (this.registrationButtonVisible = !0),
              (this.countDownVisible = !0),
              (this.countDownDate = new Date(2023, 8, 3, 17, 0, 0)),
              (this.spiedTags = ["DIV"]),
              (this.sectionChange = new e.vpe()),
              (this.currentSection = "landing"),
              this.localStorage.resetWaitingStatus();
          }
          openButton(t, o) {
            window.open(o, "_blank");
          }
          isClickWithinModal(t) {
            return !1;
          }
          get isModalOpen() {
            return this.modalService.isModalOpen;
          }
          ngOnInit() {
            (this.modalSubscription =
              this.winnerModalService.isModalOpen$.subscribe((n) => {
                this.isWinnerModalOpen = n;
              })),
              this.winnerModalService.modalData$.subscribe((n) => {
                this.modalData = n;
              }),
              localStorage.getItem("consentGiven"),
              this.termsPluginLoaderService.loadPlugin(),
              new q.r({ cloud: { cloudName: "eskalate" } }),
              setInterval(() => {
                this.updateRegistrationButtonVisibility();
              }, 1e3);
          }
          ngOnDestroy() {
            this.modalSubscription && this.modalSubscription.unsubscribe();
          }
          closeModal() {
            this.winnerModalService.toggleModal(!1);
          }
          closeJoinModal() {
            this.modalService.closeModal();
          }
          updateCountDownVisibility() {
            this.countDownVisible = new Date() < this.countDownDate;
          }
          updateRegistrationButtonVisibility() {
            this.registrationButtonVisible =
              new Date() < this.registrationDeadline;
          }
          onRegisterTeam() {
            this.toggleChatEvent.emit(!1),
              (this.showIndividualRegistrationModal = !0),
              (this.showRegistrationModal = !1),
              document.body.classList.add("overflow-hidden", "z-0"),
              document.getElementById("prizes")?.classList.add("z-0"),
              document.getElementById("prizes")?.classList.remove("z-40");
          }
          decreaseZIndex() {
            document.getElementById("prizes")?.classList.add("z-0"),
              document.getElementById("prizes")?.classList.remove("z-40"),
              document.getElementById("home")?.classList.add("z-0"),
              document.getElementById("home")?.classList.remove("z-40"),
              document.getElementById("partners")?.classList.add("z-0"),
              document.getElementById("partners")?.classList.remove("z-40"),
              document.getElementById("judges")?.classList.add("z-0"),
              document.getElementById("judges")?.classList.remove("z-40"),
              document.getElementById("info")?.classList.add("z-0"),
              document.getElementById("info")?.classList.remove("z-40"),
              document.getElementById("eligibility")?.classList.add("z-0"),
              document.getElementById("eligibility")?.classList.remove("z-40"),
              document.getElementById("about-us")?.classList.add("z-0"),
              document.getElementById("about-us")?.classList.remove("z-40"),
              document.getElementById("workshops")?.classList.add("z-0"),
              document.getElementById("workshops")?.classList.remove("z-40"),
              document.getElementById("project")?.classList.add("z-0"),
              document.getElementById("project")?.classList.remove("z-40"),
              document.getElementById("quarter")?.classList.add("z-0"),
              document.getElementById("quarter")?.classList.remove("z-40");
          }
          onShowModal() {
            this.toggleChatEvent.emit(!1),
              (this.showModal = !0),
              document.body.classList.add("overflow-hidden");
          }
          onHideModal() {
            this.toggleChatEvent.emit(!0),
              (this.showModal = !1),
              document.body.classList.remove("overflow-hidden");
          }
          openChat() {
            this.showChat = !0;
          }
          toggleChatBtn() {
            this.showChat = !this.showChat;
          }
          changeChatState(t) {
            this.modalOpen = !t;
          }
          onWindowScroll() {
            this.checkIfAtBottom(),
              (this.isStickRegisterButtonVisible = window.scrollY > 600);
          }
          checkIfAtBottom() {
            const t = window.scrollY,
              o = window.innerHeight,
              n = document.documentElement.scrollHeight;
            this.isButtonAtBottom = t + o + 5 >= n;
          }
          onScroll(t) {
            let o = "";
            const n = this._el.nativeElement.children,
              a = t.target.scrollTop,
              l = t.target.getBoundingClientRect();
            for (let C = 0; C < n.length; C++) {
              const T = n[C],
                li = T.getBoundingClientRect();
              this.spiedTags.some((ci) => ci === T.tagName) &&
                li.top - l.top <= a &&
                (o = T.id);
            }
            o !== this.currentSection && "" !== o && (this.currentSection = o);
            const h = this._el.nativeElement.querySelector("#landing"),
              Z =
                window.scrollY ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
            this.showPartnerButton = Z > h.offsetTop + h.offsetHeight - 100;
          }
          static #e = (this.ɵfac = function (o) {
            return new (o || i)(
              e.Y36(e.SBq),
              e.Y36(x),
              e.Y36(j),
              e.Y36(w),
              e.Y36(E)
            );
          });
          static #t = (this.ɵcmp = e.Xpm({
            type: i,
            selectors: [["app-root"]],
            hostBindings: function (o, n) {
              1 & o &&
                e.NdJ(
                  "click",
                  function (l) {
                    return n.isClickWithinModal(l);
                  },
                  !1,
                  e.evT
                )(
                  "scroll",
                  function () {
                    return n.onWindowScroll();
                  },
                  !1,
                  e.Jf7
                )(
                  "mousewheel",
                  function (l) {
                    return n.onScroll(l);
                  },
                  !1,
                  e.evT
                );
            },
            outputs: {
              toggleChatEvent: "toggleChatEvent",
              sectionChange: "sectionChange",
            },
            decls: 32,
            vars: 7,
            consts: [
              [4, "ngIf"],
              ["class", "relative z-40", 4, "ngIf"],
              ["class", "fixed h-full w-full  pt-2 z-50", 4, "ngIf"],
              [
                "style",
                "position: fixed; top: 45vh; left: -40px; z-index: 1000",
                4,
                "ngIf",
              ],
              ["id", "landing"],
              ["id", "prize2024", 1, "relative", "z-30"],
              ["id", "quarter", 1, "relative", "z-30"],
              ["id", "workshops", 1, "relative", "z-30"],
              ["id", "info", 1, "relative", "z-30"],
              ["id", "fixed-eligibility"],
              [3, "openChatEvent"],
              ["id", "home", 1, "relative", "z-30"],
              [3, "toggleChatEvent"],
              ["id", "prizes", 1, "relative", "z-30"],
              ["id", "organizers", 1, "relative", "z-30"],
              ["id", "about-us", 1, "relative", "z-30"],
              ["id", "partners", 1, "relative", "z-30"],
              ["class", "flex justify-center mt-3 mb-12", 4, "ngIf"],
              ["id", "footer", 1, "relative", "z-40"],
              [3, "class", 4, "ngIf"],
              [
                "onClick",
                "register_modal.showModal()",
                "class",
                "fixed text-white bottom-1/2 rounded rotate-90 transform z-[48] -left-6 px-6 bg-indigo-600 py-3 shadow hover:bg-indigo-800",
                4,
                "ngIf",
              ],
              [
                1,
                "fixed",
                "top-0",
                "left-0",
                "z-50",
                "w-full",
                "mt-5",
                "pt-3",
                "flex",
                "flex-col",
                "justify-end",
              ],
              [1, "modal-overlay"],
              [
                1,
                "border",
                "border-gray-600",
                "modal-box",
                "w-11/12",
                "max-sm:w-full",
                "max-sm:mx-2",
                "max-w-5xl",
                "bg-gray-900",
                "text-center",
                "flex",
                "flex-col",
                "mt-4",
                "shadow-lg",
                "m-auto",
              ],
              [1, "relative", "z-40"],
              [3, "currentSection"],
              [1, "fixed", "h-full", "w-full", "pt-2", "z-50"],
              [3, "showModal", "modalData", "closeModalEvent"],
              [
                2,
                "position",
                "fixed",
                "top",
                "45vh",
                "left",
                "-40px",
                "z-index",
                "1000",
              ],
              [
                "href",
                "https://form.typeform.com/to/opvWnrn7",
                "target",
                "_blank",
                3,
                "click",
              ],
              [
                1,
                "px-4",
                "py-3",
                "rounded-md",
                "transition-transform",
                "duration-300",
                "ease-in-out",
                "bg-gradient-to-r",
                "from-indigo-600",
                "to-pink-500",
                2,
                "transform",
                "rotate(270deg)",
              ],
              [1, "flex", "justify-center", "mt-3", "mb-12"],
              [
                "onClick",
                "register_modal.showModal()",
                1,
                "relative",
                "cursor-pointer",
                "inline-flex",
                "items-center",
                "justify-center",
                "p-4",
                "px-5",
                "py-3",
                "overflow-hidden",
                "font-medium",
                "text-indigo-600",
                "transition",
                "duration-300",
                "ease-out",
                "rounded-full",
                "shadow-xl",
                "group",
                "hover:ring-1",
                "hover:ring-purple-500",
              ],
              [
                1,
                "absolute",
                "inset-0",
                "w-full",
                "h-full",
                "bg-gradient-to-br",
                "from-blue-600",
                "via-purple-600",
                "to-pink-700",
              ],
              [
                1,
                "absolute",
                "bottom-0",
                "right-0",
                "block",
                "w-64",
                "h-64",
                "mb-32",
                "mr-4",
                "transition",
                "duration-500",
                "origin-bottom-left",
                "transform",
                "rotate-45",
                "translate-x-24",
                "bg-pink-500",
                "rounded-full",
                "opacity-30",
                "group-hover:rotate-90",
                "ease",
              ],
              [1, "relative", "text-white"],
              ["class", "mx-4 pt-5 h-full w-full ", 4, "ngIf"],
              [
                "class",
                "bg-indigo-600 text-white p-3 rounded-full shadow hover:bg-indigo-800",
                3,
                "click",
                4,
                "ngIf",
              ],
              [1, "mx-4", "pt-5", "h-full", "w-full"],
              [3, "closeChatEvent"],
              [
                1,
                "bg-indigo-600",
                "text-white",
                "p-3",
                "rounded-full",
                "shadow",
                "hover:bg-indigo-800",
                3,
                "click",
              ],
              [
                "viewBox",
                "0 0 512 512",
                "fill",
                "currentColor",
                "class",
                "w-8 h-8",
                4,
                "ngIf",
              ],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "fill",
                "none",
                "viewBox",
                "0 0 24 24",
                "stroke-width",
                "1.5",
                "stroke",
                "currentColor",
                "class",
                "w-8 h-8",
                4,
                "ngIf",
              ],
              [
                "viewBox",
                "0 0 512 512",
                "fill",
                "currentColor",
                1,
                "w-8",
                "h-8",
              ],
              [
                "d",
                "M448 312.43c.77-1.11 1.51-2.26 2.27-3.34A174.55 174.55 0 00480 211.85C480.32 112.55 396.54 32 292.94 32c-90.36 0-165.74 61.49-183.4 143.12a172.81 172.81 0 00-4 36.83c0 99.4 80.56 182.11 184.16 182.11 16.47 0 38.66-4.95 50.83-8.29s24.23-7.75 27.35-8.94 8-2.41 11.89-1.29l77.42 22.38a4 4 0 005-4.86l-17.72-67.49c-1.23-5-1.39-5.94 3.53-13.14z",
              ],
              [
                "d",
                "M312.54 415.38a165.32 165.32 0 01-23.26 2.05c-42.43 0-82.5-11.2-115-32.2a184.09 184.09 0 01-53.09-49.32c-26.08-34.57-40.3-78.51-40.3-124.49 0-3.13.11-6.14.22-9.16a4.34 4.34 0 00-7.54-3.12 158.76 158.76 0 00-14.86 195.24c2.47 3.77 3.87 6.68 3.44 8.62l-14.09 72.26a4 4 0 005.22 4.53l68-24.24a16.85 16.85 0 0112.92.22c20.35 8 42.86 12.92 65.37 12.92a169.45 169.45 0 00116.63-46 4.29 4.29 0 00-3.66-7.31z",
              ],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "fill",
                "none",
                "viewBox",
                "0 0 24 24",
                "stroke-width",
                "1.5",
                "stroke",
                "currentColor",
                1,
                "w-8",
                "h-8",
              ],
              [
                "stroke-linecap",
                "round",
                "stroke-linejoin",
                "round",
                "d",
                "M6 18L18 6M6 6l12 12",
              ],
              [
                "onClick",
                "register_modal.showModal()",
                1,
                "fixed",
                "text-white",
                "bottom-1/2",
                "rounded",
                "rotate-90",
                "transform",
                "z-[48]",
                "-left-6",
                "px-6",
                "bg-indigo-600",
                "py-3",
                "shadow",
                "hover:bg-indigo-800",
              ],
            ],
            template: function (o, n) {
              1 & o &&
                (e._UZ(0, "app-consent"),
                e.YNc(1, Et, 5, 0, "ng-container", 0)(2, Ht, 2, 1, "div", 1)(
                  3,
                  Jt,
                  2,
                  2,
                  "div",
                  2
                )(4, Lt, 4, 0, "div", 3),
                e.TgZ(5, "div", 4),
                e._UZ(6, "app-landing"),
                e.qZA(),
                e.TgZ(7, "div", 5),
                e._UZ(8, "app-prize2024"),
                e.qZA(),
                e.TgZ(9, "div", 6),
                e._UZ(10, "app-quarter"),
                e.qZA(),
                e.TgZ(11, "div", 7),
                e._UZ(12, "app-workshop"),
                e.qZA(),
                e.TgZ(13, "div", 8),
                e._UZ(14, "app-info"),
                e.qZA(),
                e.TgZ(15, "div", 9)(16, "app-fixed-eligiblity", 10),
                e.NdJ("openChatEvent", function () {
                  return n.openChat();
                }),
                e.qZA()(),
                e.TgZ(17, "div", 11)(18, "app-home", 12),
                e.NdJ("toggleChatEvent", function (l) {
                  return n.changeChatState(l);
                }),
                e.qZA()(),
                e.TgZ(19, "div", 13),
                e._UZ(20, "app-prizes"),
                e.qZA(),
                e.TgZ(21, "div", 14),
                e._UZ(22, "app-organizers"),
                e.qZA(),
                e.TgZ(23, "div", 15),
                e._UZ(24, "app-about-us"),
                e.qZA(),
                e.TgZ(25, "div", 16),
                e._UZ(26, "app-potential-partners"),
                e.qZA(),
                e.YNc(27, Bt, 6, 0, "div", 17),
                e.TgZ(28, "div", 18),
                e._UZ(29, "app-footer"),
                e.qZA(),
                e.YNc(30, Rt, 3, 5, "div", 19)(31, Qt, 2, 0, "button", 20)),
                2 & o &&
                  (e.xp6(1),
                  e.Q6J("ngIf", n.isModalOpen),
                  e.xp6(1),
                  e.Q6J("ngIf", !n.modalOpen),
                  e.xp6(1),
                  e.Q6J("ngIf", n.isWinnerModalOpen),
                  e.xp6(1),
                  e.Q6J("ngIf", n.showPartnerButton),
                  e.xp6(23),
                  e.Q6J("ngIf", n.registrationButtonVisible),
                  e.xp6(3),
                  e.Q6J("ngIf", !n.modalOpen),
                  e.xp6(1),
                  e.Q6J(
                    "ngIf",
                    n.isStickRegisterButtonVisible &&
                      !n.showChat &&
                      n.registrationButtonVisible
                  ));
            },
            dependencies: [
              s.O5,
              H,
              J,
              Oe,
              Be,
              De,
              Qe,
              et,
              pt,
              mt,
              _t,
              vt,
              Zt,
              Ct,
              At,
              jt,
              U,
              O,
            ],
          }));
        }
        return i;
      })();
      var Gt = c(4425),
        Vt = c(349),
        $t = c(2296),
        Wt = c(491);
      const Kt = ["scrollableContainer"],
        Xt = ["fullScreenScrollableContainer"],
        ei = (i, r) => ({ "text-right": i, "text-left": r }),
        ti = (i, r) => ({
          "bg-blue-100 text-blue-700": i,
          "bg-gray-100 text-gray-700": r,
        });
      function ii(i, r) {
        if (
          (1 & i &&
            (e.TgZ(0, "div")(1, "div", 15)(2, "div", 16),
            e._UZ(3, "span", 17),
            e.qZA()()()),
          2 & i)
        ) {
          const t = r.$implicit,
            o = e.oxw();
          e.xp6(1),
            e.Q6J("ngClass", e.WLB(3, ei, "user" === t.role, "bot" === t.role)),
            e.xp6(1),
            e.Q6J("ngClass", e.WLB(6, ti, "bot" === t.role, "user" === t.role)),
            e.xp6(1),
            e.Q6J("innerHtml", o.parseMessage(t.content), e.oJD);
        }
      }
      function ni(i, r) {
        1 & i &&
          (e.TgZ(0, "div", 18),
          e._UZ(1, "i", 19),
          e._uU(2, " Loading... "),
          e.qZA());
      }
      let oi = (() => {
          class i {
            constructor(t, o, n, a, l, h) {
              (this.ipService = t),
                (this.chatService = o),
                (this.localStorageService = n),
                (this.sanitizer = a),
                (this.renderer = l),
                (this.cdRef = h),
                (this.isChatLoading = !1),
                (this.messages = []),
                (this.userMessage = ""),
                (this.ipAddress = ""),
                (this.closeChatEvent = new e.vpe()),
                this.localStorageService.seedData(),
                this.localStorageService._waitingResponse$.subscribe((d) => {
                  this.isChatLoading = d;
                }),
                this.localStorageService._myData$.subscribe((d) => {
                  this.messages = d;
                });
            }
            ngOnInit() {
              this.fetchIpAddress();
            }
            parseMessage(t) {
              const n = t.replace(
                /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g,
                '<button class="link-button text-blue-500 underline" data-url="$2">$1</button>'
              );
              return this.sanitizer.bypassSecurityTrustHtml(n);
            }
            fetchIpAddress() {
              this.ipService.getIpAddress().subscribe(
                (t) => {
                  this.ipAddress = t.ip;
                },
                (t) => {
                  console.error("Failed to fetch IP address:", t);
                }
              );
            }
            ngAfterViewChecked() {
              document.querySelectorAll(".link-button").forEach((o) => {
                o.hasAttribute("data-click-bound") ||
                  (this.renderer.listen(o, "click", () => {
                    const n = o.getAttribute("data-url");
                    n && this.navigateToUrl(n);
                  }),
                  o.setAttribute("data-click-bound", "true"));
              });
            }
            navigateToUrl(t) {
              window.open(t, "_blank");
            }
            closeChat() {
              this.closeChatEvent.emit();
            }
            sendMessage() {
              if (this.userMessage) {
                (this.isChatLoading = !0),
                  this.localStorageService.addMessage({
                    role: "user",
                    content: this.userMessage,
                  }),
                  this.localStorageService.setWaitingStatus(!0);
                try {
                  this.chatService
                    .sendMessage(this.userMessage, this.ipAddress)
                    .subscribe((t) => {
                      (this.isChatLoading = !1),
                        this.localStorageService.setWaitingStatus(!1),
                        this.localStorageService.addMessage({
                          role: "bot",
                          content: t.message,
                        });
                    });
                } catch (t) {
                  (this.isChatLoading = !1),
                    console.error("Error sending message:", t);
                }
                this.userMessage = "";
              }
            }
            static #e = (this.ɵfac = function (o) {
              return new (o || i)(
                e.Y36(B),
                e.Y36(P),
                e.Y36(x),
                e.Y36(g.H7),
                e.Y36(e.Qsj),
                e.Y36(e.sBO)
              );
            });
            static #t = (this.ɵcmp = e.Xpm({
              type: i,
              selectors: [["app-chat-bot"]],
              viewQuery: function (o, n) {
                if ((1 & o && (e.Gf(Kt, 5), e.Gf(Xt, 5)), 2 & o)) {
                  let a;
                  e.iGM((a = e.CRH())) && (n.scrollableContainer = a.first),
                    e.iGM((a = e.CRH())) &&
                      (n.fullScreenScrollableContainer = a.first);
                }
              },
              outputs: { closeChatEvent: "closeChatEvent" },
              standalone: !0,
              features: [e.jDz],
              decls: 20,
              vars: 4,
              consts: [
                [
                  1,
                  "fixed",
                  "bottom-4",
                  "right-4",
                  "md:bottom-4",
                  "md:right-4",
                  "z-50",
                ],
                [
                  1,
                  "fixed",
                  "inset-0",
                  "bg-white",
                  "rounded-lg",
                  "shadow-lg",
                  "flex",
                  "flex-col",
                  "md:w-96",
                  "md:h-[600px]",
                  "md:bottom-20",
                  "md:right-20",
                ],
                [
                  1,
                  "flex",
                  "justify-between",
                  "items-center",
                  "p-4",
                  "bg-blue-500",
                  "text-white",
                  "md:hidden",
                ],
                [1, "text-lg", "font-semibold"],
                [3, "click"],
                [1, "fas", "fa-times"],
                [
                  1,
                  "hidden",
                  "md:flex",
                  "justify-between",
                  "items-center",
                  "p-4",
                  "bg-blue-500",
                  "text-white",
                  "rounded-t-lg",
                ],
                [1, "flex-1", "overflow-y-auto", "p-4"],
                ["scrollableContainer", ""],
                [4, "ngFor", "ngForOf"],
                ["class", "text-center", 4, "ngIf"],
                [
                  1,
                  "p-4",
                  "border-t",
                  "border-gray-300",
                  "flex",
                  "items-center",
                ],
                [
                  "type",
                  "text",
                  "name",
                  "message",
                  "placeholder",
                  "Type your message...",
                  1,
                  "w-full",
                  "text-[16px]",
                  "border",
                  "border-gray-300",
                  "rounded-lg",
                  "px-3",
                  "py-2",
                  "outline-none",
                  "focus:border-blue-500",
                  "transition",
                  3,
                  "disabled",
                ],
                [
                  1,
                  "bg-blue-500",
                  "text-white",
                  "ml-3",
                  "px-3",
                  "py-2",
                  "rounded-lg",
                  "shadow",
                  "hover:bg-blue-600",
                  "transition",
                  3,
                  "disabled",
                  "click",
                ],
                [1, "fas", "fa-paper-plane"],
                [3, "ngClass"],
                [
                  1,
                  "inline-block",
                  "rounded-lg",
                  "px-3",
                  "py-2",
                  "my-1",
                  "max-w-xs",
                  "break-words",
                  3,
                  "ngClass",
                ],
                [3, "innerHtml"],
                [1, "text-center"],
                [1, "fas", "fa-spinner", "fa-spin", "text-blue-500"],
              ],
              template: function (o, n) {
                1 & o &&
                  (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3),
                  e._uU(4, "Chat Bot"),
                  e.qZA(),
                  e.TgZ(5, "button", 4),
                  e.NdJ("click", function () {
                    return n.closeChat();
                  }),
                  e._UZ(6, "i", 5),
                  e.qZA()(),
                  e.TgZ(7, "div", 6)(8, "h2", 3),
                  e._uU(9, "Chat Bot"),
                  e.qZA(),
                  e.TgZ(10, "button", 4),
                  e.NdJ("click", function () {
                    return n.closeChat();
                  }),
                  e._UZ(11, "i", 5),
                  e.qZA()(),
                  e.TgZ(12, "div", 7, 8),
                  e.YNc(14, ii, 4, 9, "div", 9)(15, ni, 3, 0, "div", 10),
                  e.qZA(),
                  e.TgZ(16, "div", 11),
                  e._UZ(17, "input", 12),
                  e.TgZ(18, "button", 13),
                  e.NdJ("click", function () {
                    return n.sendMessage();
                  }),
                  e._UZ(19, "i", 14),
                  e.qZA()()()()),
                  2 & o &&
                    (e.xp6(14),
                    e.Q6J("ngForOf", n.messages),
                    e.xp6(1),
                    e.Q6J("ngIf", n.isChatLoading),
                    e.xp6(2),
                    e.Q6J("disabled", n.isChatLoading),
                    e.xp6(1),
                    e.Q6J("disabled", !n.userMessage || n.isChatLoading));
              },
              dependencies: [s.ez, s.mk, s.sg, s.O5],
            }));
          }
          return i;
        })(),
        ri = (() => {
          class i {
            static #e = (this.ɵfac = function (o) {
              return new (o || i)();
            });
            static #t = (this.ɵmod = e.oAB({ type: i, bootstrap: [Yt] }));
            static #i = (this.ɵinj = e.cJS({
              providers: [b, j],
              imports: [
                g.b2,
                ke,
                u.UX,
                k.JF,
                Gt.Mf,
                Vt.PW,
                $t.ot,
                Wt.Is,
                y.bB,
                I,
                S,
                H,
                J,
                oi,
              ],
            }));
          }
          return i;
        })();
      g.q6()
        .bootstrapModule(ri)
        .catch((i) => console.error(i));
    },
  },
  (f) => {
    f.O(0, [736], () => f((f.s = 241))), f.O();
  },
]);
