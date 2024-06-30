import { colorish, defineConfig } from 'pinecone-cli'
import { roles } from '@rose-pine/palette'

const palette = {}
Object.keys(roles).map((role) => {
	const currentRole = roles[role]

	// Add Sakai UI palette.
	palette[role] = {
		main: currentRole.main.alpha?.hex ?? currentRole.main.hex,
		moon: currentRole.moon.alpha?.hex ?? currentRole.moon.hex,
		dawn: currentRole.dawn.alpha?.hex ?? currentRole.dawn.hex,
	}

	// Add translucent variations.
	palette[`${role}/50`] = {
		main: colorish(currentRole.main.hex, 0.5),
		moon: colorish(currentRole.moon.hex, 0.5),
		dawn: colorish(currentRole.dawn.hex, 0.5),
	}
	palette[`${role}/15`] = {
		main: colorish(currentRole.main.hex, 0.15),
		moon: colorish(currentRole.moon.hex, 0.15),
		dawn: colorish(currentRole.dawn.hex, 0.15),
	}
})

export default defineConfig({
	options: {
		source: './themes/_sakai-theme.json',
		output: './themes',
		prefix: '$',
		includeNonItalicVariants: true,
	},
	variants: {
		main: {
			name: 'Sakai Theme',
			type: 'dark',
		},
		jupiter: {
			name: 'Sakai Theme Jupiter',
			type: 'dark',
		},
		moon: {
			name: 'Sakai Theme Moon',
			type: 'dark',
		},
		saturn: {
			name: 'Sakai Theme Saturn',
			type: 'dark',
		},
		sun: {
			name: 'Sakai Theme Sun',
			type: 'light',
		},
		titan: {
			name: 'Sakai Theme Titan',
			type: 'dark',
		},
		uranus: {
			name: 'Sakai Theme Uranus',
			type: 'dark',
		},
		venus: {
			name: 'Sakai Theme Venus',
			type: 'dark',
		},
	},
	colors: {
		shadow: colorish(palette.surface, 0.3),
		transparent: '#0000',

		onPrimary: palette.base,
		primary: palette.rose,
		primaryHover: colorish(palette.rose, 0.9),

		onSecondary: palette.base,
		secondary: palette.iris,
		secondaryHover: colorish(palette.iris, 0.9),

		...palette,
	},
})
