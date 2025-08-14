import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'gradient-move': {
					'0%': { transform: 'translate(-50%, -50%) scale(1)' },
					'50%': { transform: 'translate(-30%, -70%) scale(1.2)' },
					'100%': { transform: 'translate(-50%, -50%) scale(1)' }
				},
				'gradient-move-2': {
					'0%': { transform: 'translate(-50%, -50%) scale(1.1)' },
					'50%': { transform: 'translate(-70%, -30%) scale(0.9)' },
					'100%': { transform: 'translate(-50%, -50%) scale(1.1)' }
				},
				'text-slide': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-pulse': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				},
				'slide-in-stagger': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'float-around': {
					'0%': { transform: 'translate(0, 0)' },
					'25%': { transform: 'translate(20px, -15px)' },
					'50%': { transform: 'translate(-10px, -20px)' },
					'75%': { transform: 'translate(-20px, 10px)' },
					'100%': { transform: 'translate(0, 0)' }
				},
				'float-x': {
					'0%, 100%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(80px)' },
				},
				'float-y': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-60px)' },
				},
				'float-diagonal': {
					'0%, 100%': { transform: 'translate(0, 0)' },
					'50%': { transform: 'translate(-50px, 60px)' },
				},
				glowGreen: {
				'0%, 100%': { boxShadow: '0 0 10px 2px #22c55e' },
				'50%': { boxShadow: '0 0 20px 4px #22c55e' },
				},
				glowBlue: {
				'0%, 100%': { boxShadow: '0 0 10px 2px #3b82f6' },
				'50%': { boxShadow: '0 0 20px 4px #3b82f6' },
				},
				glowIndigo: {
				'0%, 100%': { boxShadow: '0 0 10px 2px #6366f1' },
				'50%': { boxShadow: '0 0 20px 4px #6366f1' },
				},
			},
			animation: {
				'bounce-x': 'bounce-x 6s ease-in-out infinite',
				'bounce-y': 'bounce-y 8s ease-in-out infinite',
				'bounce-diagonal': 'bounce-diagonal 10s ease-in-out infinite',
				'float-x': 'float-x 6s ease-in-out infinite',
				'float-y': 'float-y 7s ease-in-out infinite',
				'float-diagonal': 'float-diagonal 10s ease-in-out infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gradient-move': 'gradient-move 8s ease-in-out infinite',
				'gradient-move-2': 'gradient-move-2 10s ease-in-out infinite',
				'text-slide': 'text-slide 15s linear infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'scale-pulse': 'scale-pulse 4s ease-in-out infinite',
				'slide-in-stagger': 'slide-in-stagger 0.8s ease-out',
				'float-around': 'float-around 12s ease-in-out infinite',
				'glow-green': 'glowGreen 2s infinite',
				'glow-blue': 'glowBlue 2s infinite',
				'glow-indigo': 'glowIndigo 2s infinite',
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
