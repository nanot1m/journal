import Typography from '@razrabs-ui/typography'
import { forwardRef } from 'react'
import { ChiefBadge } from '../common/components'
import { PostProps } from '../types'
import { Layout } from './layout'

export const PostOutlineCard = forwardRef<HTMLDivElement, PostProps>(
  ({ as, className, title, chiefPost, date, small }, ref) => (
    <Layout
      as={as}
      chiefBadge={chiefPost && <ChiefBadge />}
      className={className}
      date={
        <Typography
          uppercase
          as='span'
          color='secondary'
          letterSpacing={1}
          size='sm'
        >
          {date}
        </Typography>
      }
      ref={ref}
      small={small}
      title={
        <Typography
          uppercase
          align='center'
          as='h2'
          className='title'
          size={small ? '2xl' : '3xl'}
          weight='medium'
        >
          {title}
        </Typography>
      }
    />
  ),
)

PostOutlineCard.displayName = 'PostOutlineCard'
