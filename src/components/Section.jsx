import PropTypes from 'prop-types';

export default function Section({children, ...props}){
    return (
        <section {...props}>
            {children}
        </section>
    )
}

Section.propTypes = {
    children: PropTypes.node.isRequired
}