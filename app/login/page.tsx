"use client";
import { supabase } from "@/app/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";

export default function Auth() {
  return (
    <div className="row flex flex-center">
      <Auth
        supabaseClient={supabase}
        providers={["google", "facebook", "twitter"]}
      />
    </div>
  );
}
