"use client";

import { ViewTransition } from "react";
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

function TrendLine({ dark = false }: { dark?: boolean }) {
  return (
    <svg className="w-16 h-5" viewBox="0 0 80 24" fill="none">
      <path
        d="M2 18 L15 16 L25 17 L40 14 L55 12 L65 8 L78 6"
        stroke={dark ? "#4ade80" : "#22c55e"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function InfoRowLight({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 py-0.5">
      <span className="text-zinc-400">{icon}</span>
      <span className="text-zinc-500 text-xs w-24">{label}</span>
      <div className="flex-1">{value}</div>
    </div>
  );
}

function InfoRowDark({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 py-0.5">
      <span className="text-zinc-500">{icon}</span>
      <span className="text-zinc-500 text-xs w-24">{label}</span>
      <div className="flex-1">{value}</div>
    </div>
  );
}

function CompanyCardLight() {
  return (
    <div className="bg-[#f8f8f8] rounded-xl border border-zinc-200/80 shadow-lg shadow-zinc-200/50 overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md overflow-hidden flex items-center justify-center">
            <Image
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/claude-ai-icon.svg"
              alt="Claude"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
          <span className="font-medium text-zinc-900 text-sm">Claude</span>
        </div>
        <div className="flex items-center gap-2">
          <TrendLine />
          <ChevronDown className="w-4 h-4 text-zinc-400 rotate-180" />
        </div>
      </div>

      <div className="bg-white rounded-t-xl border-t border-zinc-300 px-3 py-3 space-y-1">
        <InfoRowLight
          icon={<Globe className="w-3 h-3" strokeWidth={1.5} />}
          label="Website"
          value={
            <span className="text-zinc-600 flex items-center gap-1 text-xs">
              <ExternalLink className="w-2.5 h-2.5" strokeWidth={1.5} />
              claude.ai
            </span>
          }
        />
        <InfoRowLight
          icon={<Sparkles className="w-3 h-3" strokeWidth={1.5} />}
          label="Monthly visits"
          value={<span className="text-zinc-900 text-xs">216M</span>}
        />
        <InfoRowLight
          icon={<Flame className="w-3 h-3" strokeWidth={1.5} />}
          label="Heat Score"
          value={
            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded">
              98
              <TrendingUp className="w-2.5 h-2.5" strokeWidth={2} />
            </span>
          }
        />
        <InfoRowLight
          icon={<MapPin className="w-3 h-3" strokeWidth={1.5} />}
          label="Location"
          value={<span className="text-zinc-900 text-xs">California, USA</span>}
        />
        <InfoRowLight
          icon={<Tags className="w-3 h-3" strokeWidth={1.5} />}
          label="Categories"
          value={
            <div className="flex gap-1">
              {["AI", "SaaS", "B2B"].map((tag) => (
                <span
                  key={tag}
                  className="px-1.5 py-0.5 bg-zinc-100 text-zinc-600 text-[10px] font-medium rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          }
        />
        <InfoRowLight
          icon={<Users className="w-3 h-3" strokeWidth={1.5} />}
          label="Employees"
          value={<span className="text-zinc-900 text-xs">1001-5000</span>}
        />
        <InfoRowLight
          icon={<BarChart3 className="w-3 h-3" strokeWidth={1.5} />}
          label="Estimated ARR"
          value={
            <span className="px-1.5 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded">
              $3-4B
            </span>
          }
        />
      </div>
    </div>
  );
}

function CompanyCardDark() {
  return (
    <div className="bg-zinc-800 rounded-xl border border-zinc-700/80 shadow-lg shadow-black/30 overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md overflow-hidden flex items-center justify-center">
            <Image
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/claude-ai-icon.svg"
              alt="Claude"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
          <span className="font-medium text-zinc-100 text-sm">Claude</span>
        </div>
        <div className="flex items-center gap-2">
          <TrendLine dark />
          <ChevronDown className="w-4 h-4 text-zinc-500 rotate-180" />
        </div>
      </div>

      <div className="bg-zinc-900 rounded-t-xl border-t border-zinc-700 px-3 py-3 space-y-1">
        <InfoRowDark
          icon={<Globe className="w-3 h-3" strokeWidth={1.5} />}
          label="Website"
          value={
            <span className="text-zinc-400 flex items-center gap-1 text-xs">
              <ExternalLink className="w-2.5 h-2.5" strokeWidth={1.5} />
              claude.ai
            </span>
          }
        />
        <InfoRowDark
          icon={<Sparkles className="w-3 h-3" strokeWidth={1.5} />}
          label="Monthly visits"
          value={<span className="text-zinc-100 text-xs">216M</span>}
        />
        <InfoRowDark
          icon={<Flame className="w-3 h-3" strokeWidth={1.5} />}
          label="Heat Score"
          value={
            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-green-900/50 text-green-400 text-xs font-medium rounded">
              98
              <TrendingUp className="w-2.5 h-2.5" strokeWidth={2} />
            </span>
          }
        />
        <InfoRowDark
          icon={<MapPin className="w-3 h-3" strokeWidth={1.5} />}
          label="Location"
          value={<span className="text-zinc-100 text-xs">California, USA</span>}
        />
        <InfoRowDark
          icon={<Tags className="w-3 h-3" strokeWidth={1.5} />}
          label="Categories"
          value={
            <div className="flex gap-1">
              {["AI", "SaaS", "B2B"].map((tag) => (
                <span
                  key={tag}
                  className="px-1.5 py-0.5 bg-zinc-800 text-zinc-400 text-[10px] font-medium rounded border border-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          }
        />
        <InfoRowDark
          icon={<Users className="w-3 h-3" strokeWidth={1.5} />}
          label="Employees"
          value={<span className="text-zinc-100 text-xs">1001-5000</span>}
        />
        <InfoRowDark
          icon={<BarChart3 className="w-3 h-3" strokeWidth={1.5} />}
          label="Estimated ARR"
          value={
            <span className="px-1.5 py-0.5 bg-green-900/50 text-green-400 text-xs font-medium rounded">
              $3-4B
            </span>
          }
        />
      </div>
    </div>
  );
}

export function CompanyCardPreview() {
  return (
    <div className="flex gap-3">
      {/* Light mode */}
      <ViewTransition name="company-card-light-panel">
        <div className="flex-1 bg-[#f5f5f5] rounded-xl p-3 relative overflow-hidden inline-block">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, #d4d4d4 1px, transparent 1px)`,
              backgroundSize: "16px 16px",
            }}
          />
          <div className="relative z-10">
            <ViewTransition name="company-card-light">
              <div className="inline-block">
                <CompanyCardLight />
              </div>
            </ViewTransition>
          </div>
        </div>
      </ViewTransition>
      {/* Dark mode */}
      <ViewTransition name="company-card-dark-panel">
        <div className="flex-1 bg-zinc-950 rounded-xl p-3 relative overflow-hidden inline-block">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, #3f3f46 1px, transparent 1px)`,
              backgroundSize: "16px 16px",
            }}
          />
          <div className="relative z-10">
            <ViewTransition name="company-card-dark">
              <div className="inline-block">
                <CompanyCardDark />
              </div>
            </ViewTransition>
          </div>
        </div>
      </ViewTransition>
    </div>
  );
}
