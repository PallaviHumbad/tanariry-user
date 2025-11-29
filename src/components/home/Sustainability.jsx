'use client';

import Image from 'next/image';

export default function Sustainability() {
    return (
        <section className="py-16 lg:py-20">
            <div className="w-full px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {/* Image */}
                        <div className="aspect-[2/3] overflow-hidden rounded-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1587560555570-4d3f84dcee05?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287"
                                alt="Crafting sustainable crockery"
                                width={800}
                                height={1200}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <h2
                                className="mb-4 text-[#172554]"
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: 400,
                                    fontSize: '48px',
                                }}
                            >
                                The Art of Crockery Making
                            </h2>
                            <div
                                className="space-y-4 text-gray-700 leading-relaxed"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                <p>
                                    Every piece embodies a legacy of meticulous craftsmanship and unwavering dedication. We believe that our choices impact the planet, and we strive to make a positive difference through our high-quality designs. By selecting sustainable resources and promoting fair trade, we aim to deliver products that our customers can feel proud to own.
                                </p>
                                <p>
                                    Our artisans blend traditional techniques with modern sensibilities, ensuring each piece is both timeless and environmentally conscious.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - starts lower */}
                    <div className="space-y-6">
                        {/* Content */}
                        <div>
                            <h2
                                className="mb-4 text-[#172554]"
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: 400,
                                    fontSize: '48px',
                                }}
                            >
                                Made with Care for a Cleaner Future
                            </h2>
                            <div
                                className="space-y-4 text-gray-700 leading-relaxed"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                <p>
                                    At TanaRiri, we prioritize eco-friendly materials and ethical production practices in every aspect of our business. Our unwavering commitment to sustainability ensures that every piece of crockery we create is not only beautiful and stylish but also made with a sense of responsibility towards the environment.
                                </p>
                                <p>
                                    We continuously innovate to reduce our environmental footprint, from sourcing renewable materials to minimizing waste in our production processes. Our goal is to inspire conscious choices and contribute to a greener, more sustainable future for all.
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="aspect-[2/3] overflow-hidden rounded-lg">
                            <Image
                                src="https://images.unsplash.com/photo-1667450603370-6b86aa5670b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1286"
                                alt="Pottery making process"
                                width={800}
                                height={1200}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
