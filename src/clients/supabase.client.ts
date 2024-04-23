import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(
  "https://ooxmddhlqyylneqvftjx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9veG1kZGhscXl5bG5lcXZmdGp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3OTA1ODcsImV4cCI6MjAyOTM2NjU4N30.mSXuADBP8rEeXYa7qWiiT_oMWodYiqkMHfY66cXRiqQ"
)
