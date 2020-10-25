// Pega o return em db.js
const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    
    /*/ inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-21.3680938",
        lng: "-45.507666",
        name: "Lar da esperança",
        about: "Presta assistência a crianças de 06 a 15 anos de idade.",
        whatsapp: "35 99988-9988",
        images: [
            "https://images.unsplash.com/photo-1576715159532-32eb4490f140?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1580516091765-3978351061b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 8h até 20h",
        open_on_weekends: "0"
    })

    //consultar dados da tabela
    const selectedOrphanage = await db.all(`SELECT * FROM orphanages`)
    console.log(selectedOrphanage)

    /// consultar somente 1 orfanato, pelo id
    const orphanage = await db.all(`SELECT * FROM orphanages WHERE id="1"`)
    console.log(orphanage)

    // Deletar dados da tabelas
    await db.all(`DELETE FROM orphanages WHERE id="4"`)*/
})