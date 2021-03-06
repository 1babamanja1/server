let pokemonData = [
    {
        "id":"001",
        "name": "Bulbasaur",
        "pic": "/imgs/001_bulbasaur.png",
        "type": ["Grass", "Poison"],
        "details": {
          "height": 2.04,
          "weight": 15.2,
          "birthday": "14/02/2018",
          "category": "Seed",
          "weakness": [
            "Fire", "Physic",
            "Flying",
            "Ice"
          ]
        }
      },
        {
          "id":"004",
          "name": "Charmander",
          "pic": "/imgs/004_charmander.png",
          "type": ["Fire"],
          "details": {
            "height": 2.00,
            "weight": 18.7,
            "birthday": "09/03/2014",
            "category": "Lizard",
            "weakness": ["Water", "Ground", "Rock"]
          }
        },
        {
          "id": "007",
          "name": "Squirtle",
          "pic": "/imgs/007_squirtle.png",
          "type": ["Water"],
          "details": {
            "height": 1.08,
            "weight": 19.8,
            "birthday": "12/03/2017",
            "category": "Tiny Turtle",
            "weakness": ["Grass","Electric"]
          }
        },
        {
          "id":"011",
          "name": "Metapod",
          "pic": "/imgs/011_metapod.png",
          "type": ["Bug"],
          "details": {
            "height": 2.04,
            "weight": 21.8,
            "birthday": "08/06/2016",
            "category": "Cocoon",
            "weakness": ["Fire", "Flying", "Rock"]
          }
        },
        {
          "id":"015",
          "name": "Beedrill",
          "pic": "/imgs/015_beedrill.png",
          "type": ["Bug", "Poison"],
          "details": {
            "height": 3.03,
            "weight": 65.0,
            "birthday": "11/11/2011",
            "category": "Poison Bee",
            "weakness": ["Fire", "Flying", "Rock", "Physic"]
          }
        },
        {
          "id":"023",
          "name": "Ekans",
          "pic": "/imgs/023_ekans.png",
          "type": ["Poison"],
          "details": {
            "height": 6.07,
            "weight": 15.2,
            "birthday": "08/06/2017",
            "category": "Snake",
            "weakness": ["Physic", "Ground"]
          }
        }
      
]
export const getAll = (req, resp) => {
    resp.status(200).json(pokemonData)
}

export const getFullData = (req, resp) => {
  let resId = req.params.id.slice(1);
  let res = pokemonData.filter(item => item.id === resId)
  resp.status(200).json(res)
}