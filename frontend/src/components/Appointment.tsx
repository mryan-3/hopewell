import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../@/components/ui/popover'
import { Calendar } from '../../@/components/ui/calendar'
import { Button } from '../../@/components/ui/button'
import { format } from 'date-fns'
import { cn } from '../../@/lib/utils'
import { Calendar as CalendarIcon } from 'lucide-react'

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-2 bg-red-300" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus

        />
      </PopoverContent>
    </Popover>
  )
}

const Appointments: React.FC = () => {
  return (
    <div className='w-full h-full p-8'>
      <div className=''>
        <h2>When would you like to book an appointment? </h2>
        <DatePickerDemo />
      </div>
    </div>
  )
}

export default Appointments
