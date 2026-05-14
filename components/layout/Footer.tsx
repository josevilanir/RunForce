import Divider from "@/components/ui/Divider";
import { AtSign, MessageCircle } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <a href="#hero" className="inline-flex items-center gap-2">
              <span className="font-title font-bold text-3xl tracking-widest uppercase text-white">
                Run<span className="text-rf-red">Force</span>
              </span>
              <span className="font-body text-xs text-rf-gray uppercase tracking-widest">
                Team
              </span>
            </a>
            <p className="font-body text-rf-gray text-sm max-w-xs">
              Mais que corrida. É transformação.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-body text-xs text-rf-gray uppercase tracking-widest">
              Siga a RunForce
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da RunForce Team"
                className="text-white/60 hover:text-rf-red transition-colors duration-200"
              >
                <AtSign size={22} />
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da RunForce Team"
                className="text-white/60 hover:text-rf-red transition-colors duration-200"
              >
                <MessageCircle size={22} />
              </a>
            </div>
          </div>
        </div>

        <Divider className="my-8" />

        <p className="font-body text-rf-gray text-xs text-center">
          © {year} RunForce Team. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
