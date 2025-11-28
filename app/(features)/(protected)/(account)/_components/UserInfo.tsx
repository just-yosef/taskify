import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Check,
  Edit,
  Github,
  Link,
  Linkedin,
  Locate,
  Star,
  User,
  User2,
  X,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { decodeUserFromToken } from "@/app/(shared)/helpers/decodeUser";
const UserInfo = async () => {
  const user = await decodeUserFromToken();
  return (
    <>
      <div className="min-h-[250px] flex items-center justify-center py-10">
        <div className="flex flex-col gap-0.5 items-center">
          <User className="sm:size-24 size-20" opacity="30%" />
          <h4 className="font-semibold font-[rubicRegular]">
            {user?.fullName}
          </h4>
          <div className="flex gap-1">
            <Badge variant="blue">
              <User2 size={25} />
              {user?.role === "freelancer" ? "New Saller" : "New Client"}
            </Badge>
            <Badge variant="outline">
              <Locate />
              {user?.profile?.location}
            </Badge>
            <Badge variant="outline" className="bg-yellow-300">
              <Star />
              Rating 4.8
            </Badge>
            <Badge
              variant="outline"
              className={cn(
                user?.isVerified ? "bg-green-700" : "bg-red-700",
                "text-white"
              )}
            >
              {user?.isVerified ? (
                <>
                  <Check size={22} />
                  Verifyed
                </>
              ) : (
                <>
                  <X size={22} />
                  Not Verifyed
                </>
              )}
            </Badge>
          </div>
          <Badge variant="outline" className="mt-1">
            {user?.profile?.title}
          </Badge>
          <p className="text-muted-foreground">
            no bio yet
            <Button size="icon-sm" variant="outline" className="m-2">
              <Edit size={8} />
            </Button>
          </p>
          {Object.keys((user?.socialLinks as {}) || {}).length ? (
            <div className="flex items-center gap-2 my-2">
              {Object.keys(user?.socialLinks as {}).map((socialItem) => {
                return (
                  <Button variant="secondary" key={socialItem} asChild>
                    {/* @ts-ignore */}
                    <a href={user.socialLinks[socialItem]}>
                      {socialItem.toLowerCase() === "github" ? (
                        <Github />
                      ) : socialItem.toLowerCase() === "linkedin" ? (
                        <Linkedin />
                      ) : (
                        <Link />
                      )}
                    </a>
                  </Button>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <Separator />
    </>
  );
};

export default UserInfo;
