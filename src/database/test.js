const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // inserir dados na tabela
  // await saveOrphanage(db, {
  //     lat: "-29.4680448",
  //     lng: "-51.9608363",
  //     name: "Lar das meninas",
  //     about: "Presta assistência a crianças de 06 a 15 que se encontrem em situação de risco e/ou vulnerabilidade social.",
  //     whatsapp: "51912345678",
  //     images: [

  //         "https://images.unsplash.com/photo-1576715159532-32eb4490f140?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

  //         "https://images.unsplash.com/photo-1601180964401-6e474136af83?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"

  //     ].toString(),
  //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
  //     opening_hours: "Horário de visitas das 18h até 8h",
  //     open_on_weekends: "0"
  // })

  // consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // // consultar somente 1 orfanato pelo id
  // const orphanages = await db.all('SELECT * FROM orphanages WHERE id = 3')
  // console.log(orphanages)

  // // deletar dado das tabelas
  // console.log(await db.run("DELETE FROM orphanages WHERE id = 2"))
});
