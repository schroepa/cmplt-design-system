"use client";

import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/registry/cmplt/ui/card";
import {
  Field,
  FieldLabel,
  FieldDescription,
} from "@/registry/cmplt/ui/field";
import { Input } from "@/registry/cmplt/ui/input";
import { Textarea } from "@/registry/cmplt/ui/textarea";
import { Switch } from "@/registry/cmplt/ui/switch";
import { Button } from "@/registry/cmplt/ui/button";
import { Badge } from "@/registry/cmplt/ui/badge";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/registry/cmplt/ui/avatar";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/registry/cmplt/ui/alert-dialog";
import { RadioGroup, RadioCard } from "@/registry/cmplt/ui/radio-group";
import { AlertCircle, Camera, Check, ShieldAlert } from "lucide-react";

export function AccountSettingsBlock() {
  const [emailAlerts, setEmailAlerts] = React.useState(true);
  const [security2FA, setSecurity2FA] = React.useState(true);
  const [selectedPlan, setSelectedPlan] = React.useState("team");
  const [saveSuccess, setSaveSuccess] = React.useState(false);

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto w-full">
      {/* Card 1: Public Profile */}
      <Card className="bg-surface">
        <CardHeader>
          <CardTitle>Personal Profile</CardTitle>
          <CardDescription>
            Update your public persona, display avatar, and contact preferences.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Avatar Row */}
          <div className="flex items-center gap-4">
            <div className="relative group cursor-pointer">
              <Avatar size="xl">
                <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity text-white">
                <Camera className="size-4" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-semibold text-fg">Profile Avatar</div>
              <div className="text-[11px] text-fg-muted">
                JPG, PNG or WebP. Max 2MB recommended size.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field>
              <FieldLabel>Full Name</FieldLabel>
              <Input defaultValue="Sarah Connor" />
            </Field>
            <Field>
              <FieldLabel>Work Email</FieldLabel>
              <Input type="email" defaultValue="sarah@skynet-defense.org" />
            </Field>
          </div>

          <Field>
            <FieldLabel>Bio &amp; Notes</FieldLabel>
            <Textarea
              defaultValue="Design Systems Architect focusing on Base UI headless primitives and perceptual OKLCH color spaces."
              autoResize
              rows={3}
            />
          </Field>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t border-border-subtle pt-4">
          <div className="text-xs text-fg-muted">
            {saveSuccess && (
              <span className="text-status-success font-medium flex items-center gap-1">
                <Check className="size-3.5" /> Changes saved successfully!
              </span>
            )}
          </div>
          <Button size="sm" onClick={handleSave}>
            Save Profile
          </Button>
        </CardFooter>
      </Card>

      {/* Card 2: Workspace Subscription Plan */}
      <Card className="bg-surface">
        <CardHeader>
          <CardTitle>Subscription Plan</CardTitle>
          <CardDescription>
            Choose the seat allocation and compute limits for your team.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedPlan}
            onValueChange={(val) => setSelectedPlan(val as string)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            <RadioCard
              value="starter"
              title="Starter License"
              description="Up to 5 developers, unlimited open-source registry downloads."
            />
            <RadioCard
              value="team"
              title="Team Enterprise"
              description="Unlimited developers, Pro blocks access, and private registry support."
            />
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Card 3: Security & Preferences */}
      <Card className="bg-surface">
        <CardHeader>
          <CardTitle>Security &amp; Notifications</CardTitle>
          <CardDescription>
            Control how critical system events and security updates are communicated.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between rounded-md border border-border-subtle p-3.5">
            <div>
              <div className="text-xs font-semibold text-fg">Two-Factor Authentication</div>
              <div className="text-[11px] text-fg-muted">
                Enforce TOTP hardware security keys on all sensitive actions.
              </div>
            </div>
            <Switch checked={security2FA} onCheckedChange={setSecurity2FA} />
          </div>

          <div className="flex items-center justify-between rounded-md border border-border-subtle p-3.5">
            <div>
              <div className="text-xs font-semibold text-fg">Automated Email Digests</div>
              <div className="text-[11px] text-fg-muted">
                Receive weekly deployment summaries and system health digests.
              </div>
            </div>
            <Switch checked={emailAlerts} onCheckedChange={setEmailAlerts} />
          </div>
        </CardContent>
      </Card>

      {/* Card 4: Danger Zone */}
      <Card className="border-status-danger/20 bg-status-danger-bg">
        <CardHeader>
          <div className="flex items-center gap-2">
            <ShieldAlert className="size-4 text-status-danger" />
            <CardTitle className="text-status-danger">Danger Zone</CardTitle>
          </div>
          <CardDescription>
            Permanently delete this organization, unbind custom domains, and revoke all API tokens.
          </CardDescription>
        </CardHeader>
        <CardFooter className="pt-2">
          <AlertDialog>
            <AlertDialogTrigger
              render={<Button variant="danger" size="sm">Delete Workspace</Button>}
            />
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely certain?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action is irreversible. All deployment environments, database schemas, and edge tokens will be immediately purged.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Confirm Destruction</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>
    </div>
  );
}
