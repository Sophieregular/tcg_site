// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import blog from './documents/blog'
import team from './documents/team'
import testimonial from './documents/testimonials'
import categories from './documents/categories'
import imageSection from './documents/components/imageSection'
import applyBtn from './documents/components/applyBtn'
import callModal from './documents/components/callModal'
import apprenticeAd from './documents/apprenticeAd'
import leadSentence from './documents/components/leadSentence.js'
import styledHeading from './documents/components/styledHeading.js'
import supportingSentence from './documents/components/supportingSentence.js'
import courses from './documents/course'
import courseTypes from './documents/courseTypes'
import project from './documents/project'
import funder from './documents/funder'
import lead from './documents/lead'



// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    blog,
    team,
    testimonial,
    categories,
    imageSection,
    applyBtn,
    callModal,
    apprenticeAd,
    leadSentence,
    styledHeading,
    supportingSentence,
    courses,
    courseTypes,
    lead,
    project,
    funder
  ]),
})
