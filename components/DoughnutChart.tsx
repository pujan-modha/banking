"use client";

import * as React from "react";
import { Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  "amount": {
    label: "Amount",
  },
  "bank-1": {
    label: "Bank 1",
    color: "hsl(var(--chart-1))",
  },
  "bank-2": {
    label: "Bank 2",
    color: "hsl(var(--chart-2))",
  },
  "bank-3": {
    label: "Bank 3",
    color: "hsl(var(--chart-3))",
  },
  "bank-4": {
    label: "Bank 4",
    color: "hsl(var(--chart-4))",
  },
  "bank-5": {
    label: "Bank 5",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function DoughnutChart({ accounts }: DoughnutChartProps) {
  const chartData = React.useMemo(() => {
    return [
      { bank: "bank-1", amount: 275, fill: "var(--color-bank-1)" },
      { bank: "bank-2", amount: 200, fill: "var(--color-bank-2)" },
      { bank: "bank-3", amount: 287, fill: "var(--color-bank-3)" },
      { bank: "bank-4", amount: 173, fill: "var(--color-bank-4)" },
      { bank: "bank-5", amount: 190, fill: "var(--color-bank-5)" },
    ];
  }, []);

  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0);
  }, [chartData]);

  return (
    <div className="flex flex-col">
      <div className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square min-h-[150px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel className="bg-white" />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="bank"
              innerRadius={40}
              strokeWidth={5}
              paddingAngle={2}
            ></Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  );
}
