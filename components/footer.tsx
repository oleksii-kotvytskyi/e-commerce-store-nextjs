import { cn } from "@/lib/utils";

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn("mt-auto bg-white border-t", className)}>
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; 2023 Store, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
