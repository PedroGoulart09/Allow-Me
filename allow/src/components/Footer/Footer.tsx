import '../../App.css'

export default function Footer() {
  return (
    <footer className='footer'>

        <img 
          src={require('../../assets/logo-allowme-news.png')} 
          alt="Logo" 
          className="footer-logo"
        />
        <p>Copyright ©️ 2023 AllowMe News. Todos os direitos reservados</p>
   
    </footer>
  )
}
