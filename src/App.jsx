import { useEffect, useState } from 'react'
import schedule from './data.json'
import './App.css'

function App() {
  const [week, setWeek] = useState(1)

  const s = schedule.schedule.slice((week*4) - 4, week*4)
  const trows = s.map((w, i) => (
    <tr>
      <td>{week * 4 - 3 + i}</td>
      <td>{w.information.toString()}</td>
      <td>{w.frontDesk.toString()}</td>
      <td>{w.reliever.toString()}</td>
      <td>{w.backOffice.toString()}</td>
    </tr>
  ))

  const gotoNextWeek = () => {
    setWeek(prev => prev + 1)
  }

  const gotoPrevWeek = () => {
    week > 1 && setWeek(prev => prev - 1)
  }

  return (
    <>
      <main>
        <table>
          <caption>CERTIFICATION UNIT ROSTER FROM SEPTEMBER ONWARDS</caption>
          <thead>
            <th>Week</th>
            <th>Information</th>
            <th>Front Desk</th>
            <th>Reliever</th>
            <th>Back Office</th>
          </thead>
          <tbody>{trows}</tbody>
        </table>

        <div className='button-wrapper'>
          <button 
            disabled={week === 1}
            onClick={gotoPrevWeek}>
              Previous 4 weeks
          </button>

          <button 
            disabled={week === Math.floor(schedule.schedule.length / 4)}
            onClick={gotoNextWeek}>
              Next 4 weeks
          </button>
        </div>
      </main>
    </>
  )
}

export default App
