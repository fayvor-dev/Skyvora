"use client";

import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const DISMISSED_KEY = "skyvora-install-dismissed";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISSED_KEY)) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  async function handleInstall() {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setVisible(false);
  }

  function handleDismiss() {
    setVisible(false);
    sessionStorage.setItem(DISMISSED_KEY, "1");
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-4 sm:inset-x-auto sm:right-6 sm:left-auto sm:w-80 z-[60] glass-3 glass-edge rounded-2xl p-4 flex items-start gap-3"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <span className="h-9 w-9 rounded-full glass-2 flex items-center justify-center text-gold shrink-0">
        <Download size={15} strokeWidth={1.5} />
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-pearl">Install SKYVORA</p>
        <p className="text-xs text-silver-light/60 mt-1 leading-relaxed">
          Add it to your home screen for quick access to charters and the fleet.
        </p>
        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={handleInstall}
            className="rounded-full bg-gold hover:bg-gold-light text-obsidian text-xs font-medium px-4 py-1.5 transition-colors"
          >
            Install
          </button>
          <button
            onClick={handleDismiss}
            className="text-xs text-silver-light/60 hover:text-pearl transition-colors"
          >
            Not now
          </button>
        </div>
      </div>
      <button
        onClick={handleDismiss}
        aria-label="Dismiss"
        className="text-silver-light/50 hover:text-pearl transition-colors shrink-0"
      >
        <X size={14} strokeWidth={1.5} />
      </button>
    </div>
  );
}
