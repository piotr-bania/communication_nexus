import { Text } from '@react-three/drei'

const Three_D_Text = ({ text }) => {
    return (
        <Text
            color="black"
            fontSize={1}
            maxWidth={12}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={'left'}
            font='./fonts/Onamura_Normal.otf'
            anchorX="left"
        >
            {text}
        </Text>
    )
}

export default Three_D_Text