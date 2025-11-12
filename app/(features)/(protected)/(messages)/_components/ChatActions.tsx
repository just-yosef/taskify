import { MoreButton } from "@/app/(shared)/_components";
import { Button } from "@/components/ui/button";
import { useChatSettingsStore } from "../stores/useChatsSettingsStore";

export default function ChatActions() {
  const { toggle, open } = useChatSettingsStore();
  return (
    <MoreButton variantContent="teal" variant="teal">
      <Button variant="destructive">Block This User</Button>
      <Button variant="outline">Delete Chat</Button>
      <Button onClick={open} variant="outline">
        Settings
      </Button>
    </MoreButton>
  );
}
