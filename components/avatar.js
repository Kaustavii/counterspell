import Link from 'next/link'
import { Image, Link as A } from 'rebass'

export default ({ size = 50, light = false, ...props }) => (
  <Link href="https://counterspell.org">
    <A sx={{ cursor: 'pointer', lineHeight: 0 }}>
      <Image
        {...props}
        src="https://cdn.discordapp.com/attachments/1295169223483723836/1296575425107202048/image.png?ex=672a8476&is=672932f6&hm=6163b9e752ea808884fdf907fcf458dd82289cdc3b3df2d9d3cb0698b7f6ca6c&"  // Updated logo file name
        alt="Counterspell avatar"           // Updated alt text
        width={size}
        height={size}
        sx={{
          borderRadius: 'circle',
          overflow: 'hidden',
          bg: 'primary',                    // Background color, which could be the primary color in the theme
          ...props.sx
        }}
      />
    </A>
  </Link>
)