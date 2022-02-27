// logo anim
gsap.timeline()
	.fromTo("#s1", { y: 10, opacity: 0}, {opacity: 1, y: 0, duration: 1})
	.fromTo("#h", { y: -10, opacity: 0}, {opacity: 1, y: 0, duration: 1})
	.fromTo("#a", { x: -10, opacity: 0}, {opacity: 1, x: 0, duration: 1})
	.fromTo("#f", { x: 10, opacity: 0}, {opacity: 1, x: 0, duration: 1})
	.fromTo("#s2", { opacity: 0}, {opacity: 1, rotation:360, duration: 1})
	.fromTo("#bracket", { x: -53}, {x:0, ease: "none", duration: 4.4}, 0)