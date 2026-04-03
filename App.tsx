import { motion } from "motion/react";
import { 
  ArrowRight, 
  MoveRight, 
  Globe, 
  Share2, 
  ArrowUp,
  Play
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-nav shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="flex justify-between items-center px-8 max-w-7xl mx-auto">
        <a className="font-noto-serif text-2xl font-bold italic text-primary" href="#">hodangthaonguyen12a4thptll</a>
        <div className="hidden md:flex gap-8 items-center font-noto-serif text-lg tracking-wide">
          <a className="text-primary font-bold border-b-2 border-primary pb-1" href="#">Trang chủ</a>
          <a className="text-on-surface/80 hover:text-primary transition-colors" href="#gioi-thieu">Giới thiệu</a>
          <a className="text-on-surface/80 hover:text-primary transition-colors" href="#con-nguoi">Con người</a>
          <a className="text-on-surface/80 hover:text-primary transition-colors" href="#van-hoa">Văn hóa</a>
          <a className="text-on-surface/80 hover:text-primary transition-colors" href="#du-lich">Du lịch</a>
        </div>
        <button className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2.5 rounded-full font-medium hover:opacity-80 transition-all duration-300 scale-95 active:scale-90">
          Khám phá
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="relative h-[90vh] md:h-screen w-full flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          src="https://i.postimg.cc/bJrsKwHm/tai-xuong-(5).jpg" 
          alt="Lush green rice terraces in Quang Tri"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-surface"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-secondary-container/50 text-on-secondary-container text-sm font-semibold mb-6 backdrop-blur-md">
            Vùng đất di sản
          </span>
          <h1 className="font-noto-serif text-5xl md:text-8xl font-bold text-on-surface mb-6 hero-text-shadow leading-tight">
            Quảng Trị – Vùng Đất Kiên Cường
          </h1>
          <p className="font-plus-jakarta text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">
            Nơi những dòng sông chuyên chở lịch sử và những thảo nguyên xanh ngát kể câu chuyện về lòng kiên cường, bất khuất của con người miền Trung.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-primary/20 transition-all">
              Khám phá ngay
            </button>
            <button className="bg-surface-container-highest/80 backdrop-blur-md text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-surface-container-highest transition-all flex items-center gap-2">
              <Play size={20} fill="currentColor" /> Xem video
            </button>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

const Intro = () => {
  return (
    <section className="py-24 bg-surface" id="gioi-thieu">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-container/30 rounded-full blur-3xl"></div>
            <img 
              className="rounded-xl shadow-2xl relative z-10 w-full aspect-[4/5] object-cover" 
              src="https://i.postimg.cc/bJrsKwHm/tai-xuong-(5).jpg" 
              alt="Historic architecture detail"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 p-8 bg-surface-container-lowest rounded-xl shadow-xl z-20 max-w-[240px]">
              <p className="font-noto-serif italic text-primary text-lg">"Mảnh đất hồi sinh từ tro bụi chiến tranh."</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-noto-serif text-4xl md:text-5xl font-bold text-primary mb-8">Vẻ Đẹp Trường Tồn</h2>
            <div className="space-y-6 text-on-surface-variant font-plus-jakarta text-lg leading-relaxed">
              <p>Quảng Trị không chỉ là một địa danh trên bản đồ, mà là một biểu tượng của tinh thần Việt Nam. Từ những cánh đồng lúa bát ngát đến bờ biển Cửa Tùng sóng vỗ, mỗi tấc đất nơi đây đều thấm đẫm mồ hôi và tình yêu xứ sở.</p>
              <p>Chúng tôi mời bạn bước vào một hành trình cảm xúc, nơi sự tĩnh lặng của thiên nhiên giao hòa cùng tiếng vọng của lịch sử hào hùng.</p>
            </div>
            <div className="mt-10 flex items-center gap-4 text-primary font-bold">
              <span className="w-12 h-[1px] bg-primary"></span>
              <a className="hover:underline" href="#">Tìm hiểu thêm về lịch sử</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const People = () => {
  const cards = [
    {
      title: "Chân Chất",
      desc: "Nụ cười hiền hậu của những lão ngư vùng biển Cửa Việt luôn làm ấm lòng du khách phương xa.",
      img: "https://i.postimg.cc/BZg1tRt9/tai-xuong-(9).jpg"
    },
    {
      title: "Kiên Cường",
      desc: "Tinh thần thép của thế hệ đi trước vẫn vẹn nguyên trong nhịp sống hiện đại hôm nay.",
      img: "https://i.postimg.cc/T3yy7w0j/tai-xuong-(10).jpg",
      offset: true
    },
    {
      title: "Nghĩa Tình",
      desc: "Người Quảng Trị mộc mạc, hiếu khách, sẵn lòng sẻ chia từng chén trà, củ khoai.",
      img: "https://i.postimg.cc/j5TLShb7/tai-xuong-(11).jpg"
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low overflow-hidden" id="con-nguoi">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="font-noto-serif text-4xl md:text-6xl font-bold text-on-surface mb-4">Hồn Đất, Tình Người</h2>
          <p className="text-on-surface-variant text-lg">Kiên cường trong gian khó, giản dị giữa đời thường.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm transition-transform duration-500 hover:-translate-y-2 ${card.offset ? "md:translate-y-12" : ""}`}
            >
              <div className="overflow-hidden aspect-square">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={card.img} 
                  alt={card.title}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="font-noto-serif text-2xl font-bold text-primary mb-2">{card.title}</h3>
                <p className="text-on-surface-variant">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Heritage = () => {
  return (
    <section className="py-24 bg-surface" id="van-hoa">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-noto-serif text-4xl md:text-5xl font-bold text-primary mb-4">Di Sản & Ký Ức</h2>
            <p className="text-on-surface-variant text-lg">Khám phá những địa danh lịch sử đã trở thành biểu tượng của sự hy sinh và lòng tự hào dân tộc.</p>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold hover:underline group">
            Xem tất cả điểm đến <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "Thành cổ Quảng Trị",
              desc: "Nơi diễn ra cuộc chiến 81 ngày đêm rực lửa, nay là công viên văn hóa tâm linh yên bình.",
              img: "https://i.postimg.cc/25c4qJ0X/Thanh-co-Quang-Tri-4.jpg"
            },
            {
              title: "Cầu Hiền Lương",
              desc: "Biểu tượng của khát vọng thống nhất non sông, chia cắt hai miền suốt hơn 20 năm.",
              img: "https://i.postimg.cc/VkFhhfN8/tai-xuong-(8).jpg"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl bg-surface-container-highest group h-96"
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                src={item.img} 
                alt={item.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
                <h3 className="font-noto-serif text-3xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/80 max-w-md mb-6">{item.desc}</p>
                <a className="text-white font-semibold flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
                  Khám phá chi tiết <MoveRight size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Destinations = () => {
  const items = [
    {
      title: "Biển Cửa Tùng",
      desc: "\"Nữ hoàng\" của các bãi tắm miền Trung.",
      img: "https://i.postimg.cc/0j3mtJTs/61759ee4-3afa-40ff-b565-715a65a7358c.png"
    },
    {
      title: "Địa đạo Vịnh Mốc",
      desc: "Thành phố dưới lòng đất kỳ vĩ.",
      img: "https://i.postimg.cc/Xv0KSdpy/tai-xuong-(1).jpg"
    },
    {
      title: "Cầu treo Đakrông",
      desc: "Vẻ đẹp hùng vĩ giữa núi rừng Trường Sơn.",
      img: "https://i.postimg.cc/C12zYpcp/tai-xuong-(6).jpg"
    },
    {
      title: "Cửa khẩu Lao Bảo",
      desc: "Cửa ngõ thương mại nhộn nhịp.",
      img: "https://i.postimg.cc/sD79nTgn/tai-xuong-(7).jpg"
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low" id="du-lich">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-noto-serif text-4xl md:text-5xl font-bold text-center text-primary mb-16">Hành Trình Khám Phá</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <img 
                className="w-full aspect-[4/3] object-cover rounded-xl mb-4" 
                src={item.img} 
                alt={item.title}
                referrerPolicy="no-referrer"
              />
              <h4 className="font-bold text-primary mb-1">{item.title}</h4>
              <p className="text-sm text-on-surface-variant">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-noto-serif text-4xl font-bold text-primary mb-12">Khoảnh Khắc Quảng Trị</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
          <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl">
            <img 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              src="https://i.postimg.cc/fTCjnJYf/tai-xuong-(12).jpg" 
              alt="Mountain sunrise"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <img 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              src="https://i.postimg.cc/QdnQCw44/tai-xuong-(13).jpg" 
              alt="Lantern festival"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <img 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              src="https://i.postimg.cc/9FmZpCs0/tai-xuong-(15).jpg" 
              alt="Country road"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="col-span-2 relative group overflow-hidden rounded-2xl">
            <img 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              src="https://i.postimg.cc/D0gsTM4Z/tai-xuong-(14).jpg" 
              alt="Local market"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface-container-low py-12 px-8 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-4">
          <a className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
            <Globe size={20} />
          </a>
          <a className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
            <Share2 size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navbar />
      <Hero />
      <Intro />
      <People />
      <Heritage />
      <Destinations />
      <Gallery />
      <Footer />
      
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-xl z-40"
      >
        <ArrowUp size={24} />
      </motion.button>
    </div>
  );
}
