import Image from 'next/image';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Image
      src="/igreen_1.png"
      alt="iGreen Systems logo"
      width={120}
      height={36}
      className={className}
      priority
    />
  );
}
