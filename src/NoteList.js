import React from 'react'

// import './NoteList.css'

const NoteList = (props) => {
  // constructor(props){
  //   super(props)
  //   this.state={
  //     note:[
  //       {title:'Kohlrabi welsh', body:'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.'},
  //       {title:'Dandelion cucumber', body:'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.'},
  //       {title:'Prairie turnip',body:'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.'}
  //     ]
  //   }

  // }

  // const temp = [...props.arr];
  return (
    <div className='NoteList'>
      <h3>Notes</h3>
      <ul id="notes">
        {          console.log(props.arr)
}
        {
          props.arr.map(n => {
            return (
              <a onClick={() => { props.setCurrentNote(n) }} key={props.arr.indexOf(n)}>
                <li >
                  <div className="note">
                    <div className="note-title">
                      {n.title}
                    </div>
                    <div className="note-body">
                      <p>
                        {n.body}
                      </p>
                    </div>
                  </div>
                </li>
              </a>
            )
          }
          )
        }


      </ul>


    </div>
  )
}



export default NoteList