//Dados
const proffys = [
    { 
        name: "Netanel Azriel",
        avatar: "/images/avatar.png",
        whatsapp: "41997167390",
        bio: "Entusiasta a respeito de tudo que se refere ao Judaísmo. Apaixonado pela literatura judaica e principalmente pela parte mística do judaísmo. Conteúdo prático e dinâmico diariamente.",
        subject: "Judaísmo",
        cost: "R$ 30,00",
        weekday: [0],
        time_from: [720],
        time_to: [1220],
    },
    { 
        name: "Malka Azriel",
        avatar: "/images/avatar2.png",
        whatsapp: "41997167390",
        bio: "Entusiasta a respeito de tudo que se refere ao Judaísmo. Apaixonado pela literatura judaica e principalmente pela parte mística do judaísmo. Conteúdo prático e dinâmico diariamente.",
        subject: "Judaísmo",
        cost: "R$ 50,00",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Judaísmo",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
]

//Funcionalidades
function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects,weekdays })
}

function pageGiveClasses(req, res) {
    const dados = req.query
    return res.render("give-classes.html", { subjects, weekdays })
}

//Servidor
const express = require('express')
const server = express()

//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server, 
    noCache: true,
})

//Início da configuração do servidor
server
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start do servidor
.listen(5500)
