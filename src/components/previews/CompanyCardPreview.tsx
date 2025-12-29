"use client";

import Image from "next/image";
import {
  Globe,
  Sparkles,
  Flame,
  MapPin,
  Tags,
  Users,
  BarChart3,
  TrendingUp,
  ChevronDown,
  ExternalLink,
} from "lucide-react";

function TrendLine() {
  return (
    <svg className="w-20 h-6" viewBox="0 0 80 24" fill="none">
      <path
        d="M2 18 L15 16 L25 17 L40 14 L55 12 L65 8 L78 6"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 py-1">
      <span className="text-zinc-400">{icon}</span>
      <span className="text-zinc-500 text-sm w-32">{label}</span>
      <div className="flex-1">{value}</div>
    </div>
  );
}

export function CompanyCardPreview() {
  return (
    <div className="bg-[#f8f8f8] rounded-2xl border border-zinc-200/80 shadow-lg shadow-zinc-200/50 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/claude-ai-icon.svg"
              alt="Claude"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </div>
          <span className="font-medium text-zinc-900">Claude</span>
        </div>
        <div className="flex items-center gap-3">
          <TrendLine />
          <ChevronDown className="w-5 h-5 text-zinc-400 rotate-180" />
        </div>
      </div>

      <div className="bg-white rounded-t-2xl border-t border-zinc-300 px-5 py-5 space-y-3">
        <InfoRow
          icon={<Globe className="w-4 h-4" strokeWidth={1.5} />}
          label="Website"
          value={
            <span className="text-zinc-600 flex items-center gap-1.5">
              <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
              http://claude.ai
            </span>
          }
        />
        <InfoRow
          icon={<Sparkles className="w-4 h-4" strokeWidth={1.5} />}
          label="Monthly visits"
          value={<span className="text-zinc-900">216M</span>}
        />
        <InfoRow
          icon={<Flame className="w-4 h-4" strokeWidth={1.5} />}
          label="Heat Score"
          value={
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-700 text-sm font-medium rounded-md">
              98
              <TrendingUp className="w-3 h-3" strokeWidth={2} />
            </span>
          }
        />
        <InfoRow
          icon={<MapPin className="w-4 h-4" strokeWidth={1.5} />}
          label="Location"
          value={<span className="text-zinc-900">California, USA</span>}
        />
        <InfoRow
          icon={<Tags className="w-4 h-4" strokeWidth={1.5} />}
          label="Categories"
          value={
            <div className="flex gap-1.5">
              {["AI", "SaaS", "B2B"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-zinc-100 text-zinc-600 text-xs font-medium rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          }
        />
        <InfoRow
          icon={<Users className="w-4 h-4" strokeWidth={1.5} />}
          label="Employees"
          value={<span className="text-zinc-900">1001-5000</span>}
        />
        <InfoRow
          icon={<BarChart3 className="w-4 h-4" strokeWidth={1.5} />}
          label="Estimated ARR"
          value={
            <span className="px-2 py-0.5 bg-green-50 text-green-700 text-sm font-medium rounded-md">
              $3-4B
            </span>
          }
        />
        <InfoRow
          icon={<TrendingUp className="w-4 h-4" strokeWidth={1.5} />}
          label="Founders"
          value={
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full overflow-hidden bg-zinc-200">
                  <Image
                    src="https://assets.stickpng.com/images/68446faef46e60b40c392760.png"
                    alt="Dario Amodei"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-cover"
                  />
                </div>
                <span className="text-zinc-900 text-sm">Dario Amodei</span>
              </div>
              <span className="px-1.5 py-0.5 bg-zinc-100 text-zinc-500 text-xs font-medium rounded">
                +5
              </span>
            </div>
          }
        />
      </div>
    </div>
  );
}
