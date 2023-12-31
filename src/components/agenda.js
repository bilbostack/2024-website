import React from "react"
import agendaMapper from "../lib/agendaMapper"
import agendaSlotType from "../lib/agendaSlotTypes"

export default ({ agenda, speakers }) => {
  const tracks = agenda.tracks
  const agendaSlotMap = agendaMapper(agenda, speakers)

  return (
    <section id="agenda">
      <div className="container">
        <h2 className="text-center">Agenda</h2>
        <div className="table-responsive-sm">
          <table
            id="agenda-table"
            className="table table-striped stacktable large-only"
          >
            <thead>
              <tr>
                <th>&nbsp;</th>
                {tracks.map((track, index) => (
                  <th key={index} width="40%">
                    {track.link ? (
                      <div id="track">
                        <a href={track.link} target="_blank" rel="noopener noreferrer">
                          {track.name}
                        </a>
                      </div>
                    ) : (
                      track.name
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {agendaSlotMap.map((slot, slot_index) => {
                const [time_range, ...content] = slot
                return (
                  <tr key={slot_index}>
                    <td class="time">{time_range}</td>
                    {content.map((content_item, index) => {
                      if (content_item.type === agendaSlotType.SPEAKER)
                        return (
                          <td key={index}>
                            <a href={content_item.content.slug + "#talk"}>
                              <h5>{content_item.content.talk.title}</h5>
                              <p>{content_item.content.name}</p>
                            </a>
                          </td>
                        )

                      if (content_item.type === agendaSlotType.SPEAKER_GROUP)
                        return (
                          <td key={index}>
                            <a href={content_item.content[0].slug + "#talk"}>
                              <h5>{content_item.content[0].talk.title}</h5>
                              <p>
                                {content_item.content.reduce(
                                  (prev_speaker, current_speaker) =>
                                    prev_speaker.name +
                                    " & " +
                                    current_speaker.name
                                )}
                              </p>
                            </a>
                          </td>
                        )

                      return (
                        <td key={index}>
                          <p>{content_item.content}</p>
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
