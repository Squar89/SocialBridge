import { Check } from "lucide-react"
import { Badge as VerifiedBadge } from "@/components/ui/badge"

export default function Component() {
  return (
    <VerifiedBadge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
      <Check className="w-3 h-3 mr-1" aria-hidden="true" />
      <span>Zweryfikowana</span>
    </VerifiedBadge>
  )
}
