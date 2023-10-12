
type Table = {
    day: string, // e.g. "Mo - Fr"
    time: string // e.g. "08:00 - 12:00<br>13:00 - 17:00"
}

type TableJson = {
    dayOfWeek: number, // e.g. 1
    from: string, // e.g. "08:00"
    till: string, // e.g. "12:00"
    status: "" // Reserved for future use
}
type Vacation = {
    from: string, // Date Time string e.g. 2022-01-01 00:00:00
    till: string, // Date Time string e.g. 2022-01-01 00:00:00
    short_text: string, // e.g. "New Year's Day"
    text: string, // e.g. "Wir haben geschlossen. Bitte beachten Sie unsere Öffnungszeiten."
    title: string, // e.g. "Neujahr"
}

/**
 * The file type of the openhours.yml file
 *
 * Speichert die Sprechstundenzeiten / Öffnungszeiten
 */
export type filetype = {
    _editor: "openhours/v1",
    table: Table[],     // Tabellenansicht der Öffnungszeiten
    json: TableJson[],  // Öffnungszeiten für each day of the week / time slot
    vacation: Vacation[],   // Leave empty if no data
}
