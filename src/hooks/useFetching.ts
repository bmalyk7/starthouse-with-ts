import React, {useState} from 'react'

export const useFetching = (callback: () => void) => {
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetching: any = async () => {
    try{
      setLoading(true)
      await callback()
    } catch (e: any) {
      setError(e.message)
    } finally {
      setTimeout(( ) => setLoading(false), 200)
    }
  }

  return [fetching, error, isLoading]
}