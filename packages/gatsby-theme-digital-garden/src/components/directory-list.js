import React from 'react'
import isPresent from 'is-present'
import { Styled, css } from 'theme-ui'
import { Link } from 'gatsby'
import { Folder } from 'react-feather'

export default ({ directories }) =>
  isPresent(directories) ? (
    <>
      <div
        css={css({
          py: 3,
          display: 'flex',
          flexWrap: 'wrap'
        })}
      >
        {Object.entries(directories).map(([key, value]) => (
          <Styled.a as={Link} key={key} to={value[0].pagePath}>
            <div
              key={key}
              css={css({
                w: [1, 2, 2],
                p: 3,
                display: 'flex',
                alignItems: 'center'
              })}
            >
              <Folder style={{ marginRight: '10px' }} />
              <span>{key}</span>
            </div>
          </Styled.a>
        ))}
      </div>
      <hr />
    </>
  ) : null
