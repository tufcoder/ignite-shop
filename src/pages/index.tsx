import { styled } from "../styles"

const Button = styled('button', {
  border: 0,
  borderRadius: 4,
  padding: '4px 8px',
  backgroundColor: '$rocketseat',

  span: {
    fontWeight: 'bold',
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  },
})

export default function Home() {
  return (
    <div>
      <Button>
        <span>Teste</span>
        Enviarfff
      </Button>
    </div>
  )
}
