"use client";
import OpenLayout from "@/components/OpenLayout";
import React, { Suspense } from "react";
type Props = {
  children: React.ReactNode;
};
export default function layout(props: Props) {
	return (
		<Suspense>
			<OpenLayout>{props.children}</OpenLayout>;
		</Suspense>
	);
}
