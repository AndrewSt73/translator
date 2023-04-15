import React, { useState } from 'react';
import './DDcss.css'

// import { StoreContext } from './Level1';


const DragAndDrop = () => {
  const[boards, setBoards] = useState([
    {id: 1, title: "Операции", items: [{id: 1, title: "1"},{id: 2, title: "2"},{id: 3, title: "3"},
    {id: 4, title: "4"},{id: 5, title: "5"},{title: "6"}
  
  
    ]},
    //{id: 2, title: "Решение", items: [{id: 0, title: " "},{id: 0, title: " "},{id: 0, title: " "},{id: 0, title: " "}]},
     {id: 2, title: "Решение", items: []}
    // {id: 4, title: "n1", items: []},
    // {id: 5, title: "n1", items: []},
    // {id: 6, title: "n1", items: []}

  ])

  const[currentBoard, setcurrentBoard] = useState(null)
  const[currentItem, setcurrentItem] = useState(null)

  // срабатывает когда взяли карточку
  function dragOverHandler(e){
      e.preventDefault()
      if(e.target.className == 'item'){
        e.target.style.boxShadow = '0 10px 3px gray'
      }

  }
  // вышли за пределы другой карты
  function dragLeaveHandler(e){
    e.target.style.boxShadow = 'none'

  }
  // отпустили перемещение
  function dragStartHandler(e, board, item){
      setcurrentBoard(board)
      setcurrentItem(item)
  }
  // нахождение над другим объектом
  function dragEndHandler(e){
    e.target.style.boxShadow = 'none'
  }
  // отпуск карты
  function dropHandler(e, board, item){ 
    e.preventDefault()
    // индекс в массиве текущей карты в руке 
    const currentIndex = currentBoard.items.indexOf(currentItem)
    currentBoard.items.splice(currentIndex, 1)
    const dropIndex = board.items.indexOf(item)
    board.items.splice(dropIndex + 1, 0, currentItem)
    setBoards(boards.map(b =>{
      if(b.id === board.id){
        return board
      }

      if(b.id === currentBoard.id){
        return currentBoard
      }

      return b 
    }))
    e.target.style.boxShadow = 'none'
    e.stopPropagation()
  }

  function dropCardHandler(e, board){
    board.items.push(currentItem)
    const currentIndex = currentBoard.items.indexOf(currentItem)
    // consol log ????


    // убрать чтобы не убиралось с первой доск.
    //currentBoard.items.splice(currentIndex, 1)

    setBoards(boards.map(b =>{
      if(b.id === board.id){
        return board
      }

      if(b.id === currentBoard.id){
        return currentBoard
      }
      return b 
    }))
    e.target.style.boxShadow = 'none'
    e.stopPropagation()
  }

  function check(){
    
  }



  return (
    
    <div className='board_app'>
      
        {boards.map(board =>
          <div 
          className='board'
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropCardHandler(e, board)}
          >
          
            <div className='board__title'>{board.title}</div>
            {board.items.map(item =>
              <div 

              onDragOver={(e) => dragOverHandler(e)}
              onDragLeave={e => dragLeaveHandler(e)}
              onDragStart={(e) => dragStartHandler(e, board, item)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDrop={(e) => dropHandler(e, board, item)}
              

              draggable = {true}
              className='item'
              >{item.title}</div>
            )}
          </div>
        )}
    </div>
    
  );
}

export default DragAndDrop;
