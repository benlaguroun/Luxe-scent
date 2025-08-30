import { useState } from "react";
import { Tag, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

interface DiscountCodeProps {
  onApplyDiscount: (discount: {
    code: string;
    amount: number;
    type: "percentage" | "fixed";
  }) => void;
  appliedDiscount?: {
    code: string;
    amount: number;
    type: "percentage" | "fixed";
  } | null;
  onRemoveDiscount: () => void;
}

const DiscountCode = ({
  onApplyDiscount,
  appliedDiscount,
  onRemoveDiscount,
}: DiscountCodeProps) => {
  const [code, setCode] = useState("");
  const [isApplying, setIsApplying] = useState(false);

  // Demo discount codes
  const validCodes = {
    WELCOME10: { amount: 10, type: "percentage" as const },
    LUXURY20: { amount: 20, type: "percentage" as const },
    FIRST50: { amount: 50, type: "fixed" as const },
    VIP15: { amount: 15, type: "percentage" as const },
    NEWUSER: { amount: 25, type: "fixed" as const },
  };

  const handleApplyCode = async () => {
    if (!code.trim()) return;

    setIsApplying(true);

    // Simulate API call
    setTimeout(() => {
      const upperCode = code.toUpperCase();
      const discount = validCodes[upperCode as keyof typeof validCodes];

      if (discount) {
        onApplyDiscount({
          code: upperCode,
          amount: discount.amount,
          type: discount.type,
        });
        toast({
          title: "Discount applied!",
          description: `${upperCode} discount has been applied to your order.`,
        });
        setCode("");
      } else {
        toast({
          title: "Invalid code",
          description: "Please check your discount code and try again.",
          variant: "destructive",
        });
      }
      setIsApplying(false);
    }, 500);
  };

  const handleRemoveCode = () => {
    onRemoveDiscount();
    toast({
      title: "Discount removed",
      description: "The discount code has been removed from your order.",
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleApplyCode();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
        <Tag className="h-4 w-4" />
        Discount Code
      </div>

      {appliedDiscount ? (
        <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-800">
              {appliedDiscount.code} applied
            </span>
            <span className="text-sm text-green-600">
              (-
              {appliedDiscount.type === "percentage"
                ? `${appliedDiscount.amount}%`
                : `$${appliedDiscount.amount}`}
              )
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRemoveCode}
            className="text-green-700 hover:text-green-800 hover:bg-green-100"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="flex gap-2">
          <Input
            placeholder="Enter discount code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button
            onClick={handleApplyCode}
            disabled={!code.trim() || isApplying}
            variant="outline"
            className="shrink-0"
          >
            {isApplying ? "Applying..." : "Apply"}
          </Button>
        </div>
      )}

      <div className="text-xs text-muted-foreground space-y-1">
        <p>Available demo codes:</p>
        <div className="flex flex-wrap gap-1">
          {Object.keys(validCodes).map((demoCode) => (
            <code
              key={demoCode}
              className="px-2 py-1 bg-muted rounded text-xs cursor-pointer hover:bg-muted/80"
              onClick={() => setCode(demoCode)}
            >
              {demoCode}
            </code>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscountCode;
