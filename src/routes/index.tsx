import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Check, Copy, MessageCircle, Video, Gift, MessagesSquare, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import instructorPhoto from "@/assets/le-hong-son.png.asset.json";

const groupUrl = "https://zalo.me/g/tijqol733";
const title = "Lê Hồng Sơn | Cộng đồng AI Marketing & Bán hàng";
const description = "Tham gia nhóm Zalo cùng Lê Hồng Sơn để trao đổi và thực hành ứng dụng AI vào Marketing, content, hình ảnh và bán hàng.";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Index,
});

const benefits = [
  { number: "01", icon: MessageCircle, title: "Trao đổi kiến thức AI", text: "Cùng chia sẻ cách làm, mẹo và công cụ AI ứng dụng vào Marketing và Bán hàng.", tag: "HỌC CÙNG CỘNG ĐỒNG" },
  { number: "02", icon: Video, title: "Thực hành qua Zoom", text: "Từng bước đưa AI vào công việc thực tế. Theo dõi lịch và đường dẫn buổi học trong nhóm.", tag: "TỪ KIẾN THỨC ĐẾN THỰC HÀNH" },
  { number: "03", icon: Gift, title: "Chia sẻ tài liệu & Skill AI", text: "Khám phá cách viết content, tạo hình ảnh và làm video bằng AI qua tài liệu được chia sẻ trong nhóm.", tag: "ÁP DỤNG VÀO CÔNG VIỆC" },
  { number: "04", icon: MessagesSquare, title: "Hỏi đáp khi áp dụng", text: "Không cần tự loay hoay một mình. Chia sẻ vướng mắc và cùng cộng đồng tìm cách giải quyết.", tag: "KHÔNG HỌC MỘT MÌNH" },
];

function JoinLink({ children = "Vào nhóm Zalo miễn phí", className = "" }: { children?: React.ReactNode; className?: string }) {
  return <Button variant="join" asChild className={className}><a href={groupUrl} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight aria-hidden="true" /></a></Button>;
}

function Index() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  async function copyLink() {
    try { await navigator.clipboard.writeText(groupUrl); setCopied(true); setCopyError(false); }
    catch { setCopyError(true); }
  }
  return <div className="landing-page">
    <header className="site-header"><div className="page-width header-inner"><a href="/" className="brand-name">LÊ HỒNG SƠN<span>AI MARKETING & BÁN HÀNG</span></a><Button variant="ghost" asChild className="header-join"><a href={groupUrl} target="_blank" rel="noopener noreferrer">Vào nhóm miễn phí <ArrowUpRight /></a></Button></div></header>
    <main>
      <section className="hero-section">
        <div className="page-width hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> CỘNG ĐỒNG ZALO MIỄN PHÍ</div>
            <h1>AI Marketing<br />& <span>Bán hàng</span><span className="hero-byline">Cùng Lê Hồng Sơn</span></h1>
            <p className="hero-question">Biết AI rất mạnh,<br />nhưng chưa biết bắt đầu từ đâu?</p>
            <p className="hero-description">Cùng trao đổi, thực hành và đưa AI vào công việc mỗi ngày. Từ viết content, tạo ảnh đến làm video bán hàng.</p>
            <JoinLink />
            <div className="hero-assurance"><Check /> Miễn phí tham gia <span>·</span> Dành cho cả người mới</div>
          </div>
          <figure className="hero-portrait">
            <div className="hero-frame"><img src={instructorPhoto.url} alt="Lê Hồng Sơn đang hướng dẫn mọi người thực hành ứng dụng AI" width={1254} height={1254} fetchPriority="high" /></div>
            <figcaption className="hero-caption">CONTENT <span> / </span> HÌNH ẢNH <span> / </span> VIDEO</figcaption>
          </figure>
        </div>
      </section>
      <div className="audience-strip"><div className="page-width audience-inner"><span>DÀNH CHO BẠN</span><p>Chủ shop</p><span className="strip-divider" /><p>Người bán online</p><span className="strip-divider" /><p>Người làm marketing</p><span className="strip-divider" /><p>Người mới dùng AI</p></div></div>
      <section className="page-width problem-section">
        <div className="section-intro"><p className="section-kicker">BẮT ĐẦU TỪ ĐÚNG VẤN ĐỀ</p><h2>Bạn có đang gặp<br /><span>những chuyện này?</span></h2><p>Không phải AI quá khó.<br />Có thể bạn chỉ đang thiếu một nơi để bắt đầu.</p></div>
        <div className="problem-list">{["Dùng ChatGPT nhưng bài viết vẫn chung chung, không giống giọng mình.", "Muốn làm ảnh, video bán hàng mà không biết bắt đầu từ đâu.", "Học nhiều công cụ AI nhưng chưa đưa được vào việc hằng ngày.", "Làm tới giữa chừng thì kẹt, không biết hỏi ai."].map((text, i) => <div className="problem-row" key={text}><span className="problem-index">0{i + 1}</span><p>{text}</p><X aria-hidden="true" /></div>)}<p className="problem-note"><Check /> Cùng tháo gỡ từng bước. Không cần biết lập trình.</p></div>
      </section>
      <section className="benefits-section"><div className="page-width"><div className="benefits-heading"><div><p className="section-kicker">HỌC THẬT. LÀM THẬT.</p><h2>Vào nhóm, bạn nhận được gì?</h2></div><span className="small-label">04 GIÁ TRỊ THIẾT THỰC <ArrowRight /></span></div><div className="benefits-grid">{benefits.map(({ number, icon: Icon, title: heading, text, tag }) => <article className="benefit-card" key={number}><div className="benefit-top"><Icon /><span>{number}</span></div><h3>{heading}</h3><p>{text}</p><div className="benefit-tag">{tag}</div></article>)}</div></div></section>
      <section className="join-section" id="tham-gia"><div className="page-width join-inner"><p className="section-kicker">BƯỚC TIẾP THEO CỦA BẠN</p><h2>Đừng chỉ biết về AI.<br /><span>Hãy bắt đầu cùng nhau.</span></h2><p>Tham gia nhóm Zalo cùng Lê Hồng Sơn.<br />Kết nối với cộng đồng và theo dõi các nội dung học AI thực hành.</p><JoinLink className="final-join" /><div className="join-assurance"><Check /> Không phí tham gia <span>·</span> Có thể rời nhóm bất cứ lúc nào</div><details className="zalo-help"><summary>Không mở được Zalo? <ChevronDown /></summary><div className="help-content"><p>Nếu đang xem trong Facebook, hãy mở trang bằng Safari hoặc Chrome rồi bấm lại nút vào nhóm. Bạn cũng có thể sao chép đường dẫn và mở trong Zalo.</p><div className="copy-row"><a href={groupUrl} target="_blank" rel="noopener noreferrer">{groupUrl}</a><Button variant="outline" size="sm" onClick={copyLink}>{copied ? <Check /> : <Copy />}{copied ? "Đã sao chép" : "Sao chép"}</Button></div><p role="status">{copyError ? "Bạn có thể nhấn giữ đường dẫn phía trên để sao chép." : copied ? "Đã sao chép đường dẫn nhóm Zalo." : ""}</p></div></details></div></section>
    </main>
    <footer className="site-footer"><div className="page-width footer-inner"><span>LÊ HỒNG SƠN <span className="footer-divider">/</span> AI MARKETING & BÁN HÀNG</span><span>Kết nối. Thực hành. Cùng phát triển.</span></div></footer>
  </div>;
}
