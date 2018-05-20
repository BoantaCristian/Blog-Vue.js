import Blog from './components/Blog.vue'
import Formular from './components/Formular.vue'
import NavBar from './components/NavBar.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Home from './components/Home.vue'

export default[
    {path: '/', component: Home},
    {path: '/blog', component:Blog},
    {path: '/formular', component:Formular},
    {path: '/about', component: About},
    {path: '/contact', component: Contact}
]