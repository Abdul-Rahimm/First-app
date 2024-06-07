import Link from "next/link";
import Card from "@/components/card";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div className="flex flex-col h-full justify-between">
        <div>Archived Notifications</div>
        <Link className="self-end md-auto" href="/complex-dashboard">
          Default
        </Link>
      </div>
    </Card>
  );
}
