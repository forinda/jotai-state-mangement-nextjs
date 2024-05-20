"use client";
import Link from "next/link";
import React from "react";

export default function NotFound() {
	return (
		<div className="flex items-center justify-center min-h-[50vh]">
			<div className="max-w-md text-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="feather feather-alert-triangle"
				>
					<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" />
				</svg>

				<h1 className="text-4xl font-bold text-gray-800 mb-2">
          Page Not Found
				</h1>
				<p className="text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist.
				</p>
				<Link
					href="/"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
          Go to back
				</Link>
			</div>
		</div>
	);
}
