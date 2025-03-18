import { Box } from "@mui/material"
import VariantButtonGroup from "./VariantButton.jsx"


const Friendlist = () => {

  return (

  <section>
        <Box component="section" sx={{ p:2, border: '1px solid blue', width: 200}}>
        <h1>Friend</h1>
        <ul class="mdc-list mdc-list--two-line">
          <li class="mdc-list-item" tabindex="0">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Song Title</span>
              <span class="mdc-list-item__secondary-text">Artist</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Song Title</span>
              <span class="mdc-list-item__secondary-text">Artist</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Song Title</span>
              <span class="mdc-list-item__secondary-text">Artist</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Song Title</span>
              <span class="mdc-list-item__secondary-text">Artist</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__ripple"></span>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Song Title</span>
              <span class="mdc-list-item__secondary-text">Artist</span>
            </span>
          </li>
        </ul>
        <VariantButtonGroup />
        </Box>
      
      </section>
  )
}

export default Friendlist