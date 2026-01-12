import { Link } from "react-router-dom";
import img1 from "@/assets/images/img1.png";
import img2 from "@/assets/images/img2.png";

const DiscoverSection = () => {
  return (
    <section className="bg-[#f3f2f0] py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 
            className="font-semibold text-center"
            style={{ fontFamily: "trap, Poppins, system-ui, sans-serif", fontSize: "46px", lineHeight: "52px", color: "#212121" }}
          >
            Discover How <span style={{ color: "#C95B4A" }}>EZYBUILDS</span> Can Help You
          </h2>
        </div>

        <div className="text-center mb-12">
          <p 
            className="mx-auto max-w-3xl"
            style={{ color: "#6b6b6b", fontSize: "14px", lineHeight: "22px" }}
          >
            Partner with 100+ AEC specialists in design, drafting, BIM, cost estimation, and project management. Trained in US standards,
            fluent in English, and available at 70% lower costs.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.10)] overflow-hidden">
            <div className="grid md:grid-cols-[1fr_220px] items-stretch">
              <div className="p-8">
                <Link to="/outsource-architecture-construction-staffing" className="no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-[70px] h-[70px] rounded-[12px] bg-[#C95B4A] flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 70 70" fill="none">
                        <path
                          d="M35 10C35 10.5523 35.4477 11 36 11H34C33.4477 11 33 10.5523 33 10C33 9.44772 33.4477 9 34 9H36C36.5523 9 37 9.44772 37 10C37 10.5523 36.5523 11 36 11ZM34 13H36C36.5523 13 37 13.4477 37 14C37 14.5523 36.5523 15 36 15H34C33.4477 15 33 14.5523 33 14C33 13.4477 33.4477 13 34 13ZM45 20C45 20.5523 45.4477 21 46 21H44C43.4477 21 43 20.5523 43 20C43 19.4477 43.4477 19 44 19H46C46.5523 19 47 19.4477 47 20C47 20.5523 46.5523 21 46 21ZM44 23H46C46.5523 23 47 23.4477 47 24C47 24.5523 46.5523 25 46 25H44C43.4477 25 43 24.5523 43 24C43 23.4477 43.4477 23 44 23ZM25 30C25 30.5523 25.4477 31 26 31H24C23.4477 31 23 30.5523 23 30C23 29.4477 23.4477 29 24 29H26C26.5523 29 27 29.4477 27 30C27 30.5523 26.5523 31 26 31ZM24 33H26C26.5523 33 27 33.4477 27 34C27 34.5523 26.5523 35 26 35H24C23.4477 35 23 34.5523 23 34C23 33.4477 23.4477 33 24 33Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <h3 className="text-[18px] font-semibold" style={{ color: "#212121" }}>
                      Offshore Staffing for Any AEC Talent
                    </h3>
                  </div>
                </Link>
                <p 
                  className="mt-4"
                  style={{ color: "#6b6b6b", fontSize: "13px", lineHeight: "20px" }}
                >
                  Hire remote AEC professionals from estimators and architects to BIM, drafting, engineering, and project support. Build and
                  grow your team flexibly, without long-term commitments.
                </p>
              </div>
              <div className="flex items-center justify-center p-6 bg-white">
                <img src={img1} alt="" className="w-[188px] h-[188px] object-contain" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.10)] overflow-hidden">
            <div className="grid md:grid-cols-[1fr_220px] items-stretch">
              <div className="p-8">
                <a href="https://ezybuilds.com/project-intake-form/" className="no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-[70px] h-[70px] rounded-[12px] bg-[#C95B4A] flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 70 70" fill="none">
                        <path
                          d="M35 15C35 15.5523 35.4477 16 36 16H34C33.4477 16 33 15.5523 33 15C33 14.4477 33.4477 14 34 14H36C36.5523 14 37 14.4477 37 15C37 15.5523 36.5523 16 36 16ZM34 18H36C36.5523 18 37 18.4477 37 19C37 19.5523 36.5523 20 36 20H34C33.4477 20 33 19.5523 33 19C33 18.4477 33.4477 18 34 18ZM45 25C45 25.5523 45.4477 26 46 26H44C43.4477 26 43 25.5523 43 25C43 24.4477 43.4477 24 44 24H46C46.5523 24 47 24.4477 47 25C47 25.5523 46.5523 26 46 26ZM44 28H46C46.5523 28 47 28.4477 47 29C47 29.5523 46.5523 30 46 30H44C43.4477 30 43 29.5523 43 29C43 28.4477 43.4477 28 44 28ZM25 35C25 35.5523 25.4477 36 26 36H24C23.4477 36 23 35.5523 23 35C23 34.4477 23.4477 34 24 34H26C26.5523 34 27 34.4477 27 35C27 35.5523 26.5523 36 26 36ZM24 38H26C26.5523 38 27 38.4477 27 39C27 39.5523 26.5523 40 26 40H24C23.4477 40 23 39.5523 23 39C23 38.4477 23.4477 38 24 38Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <h3 className="text-[18px] font-semibold" style={{ color: "#212121" }}>
                      Outsource AEC Projects End to End
                    </h3>
                  </div>
                </a>
                <p 
                  className="mt-4"
                  style={{ color: "#6b6b6b", fontSize: "13px", lineHeight: "20px" }}
                >
                  Delegate entire projects, design, drafting, BIM, MEP coordination, modeling, estimation, or more to our offshore experts.
                  We handle delivery, quality, and deadlines.
                </p>
              </div>
              <div className="flex items-center justify-center p-6 bg-white">
                <img src={img2} alt="" className="w-[188px] h-[188px] object-contain" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/contact-us#contact"
            className="inline-flex items-center justify-center rounded-[60px] bg-[#C95B4A] px-[26px] py-[12px] text-white"
            style={{ fontFamily: "Poppins, system-ui, sans-serif", fontSize: "13px", fontWeight: 500 }}
          >
            Get Your Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
