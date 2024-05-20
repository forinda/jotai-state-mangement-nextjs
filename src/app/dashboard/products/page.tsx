"use client";
import Image from "next/image";
import React from "react";
const products = [
	{
		id: 1,
		name: "Product 1",
		description: "This is a description for Product 1.",
		price: "$10.00",
		imageUrl:
			"https://i.pinimg.com/236x/c1/60/11/c160115274f29ea8ad371da536ce1916.jpg",
	},
	{
		id: 2,
		name: "Product 2",
		description: "This is a description for Product 2.",
		price: "$20.00",
		imageUrl:
			"https://i.pinimg.com/236x/bb/6e/1f/bb6e1f3423b534e347c5cde967d5c1f3.jpg",
	},
	{
		id: 3,
		name: "Product 3",
		description: "This is a description for Product 2.",
		price: "$25.00",
		imageUrl:
			"https://i.pinimg.com/236x/1f/59/7f/1f597fae6446ccea15c7bb3f1642d4f8.jpg",
	},
	// Add more products as needed
];

export default function ProductsPage() {
	return (
		<div className="flex">
			{/* Replace with actual user data */}
			<div className="flex-1 p-6">
				<h1 className="text-3xl font-bold mb-4">Products</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{products.map((product) => (
						<div
							key={product.id}
							className="border rounded-lg shadow-md"
						>
							<Image
								height={300}
								width={300}
								src={product.imageUrl}
								alt={product.name}
								className="w-full h-40 object-scale-down mb-4"
							/>
							<div className="p-4">
								<h2 className="text-xl font-semibold mb-2">
									{product.name}
								</h2>
								<p className="text-gray-700 mb-2">
									{product.description}
								</p>
								<p className="text-gray-900 font-bold">
									{product.price}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
