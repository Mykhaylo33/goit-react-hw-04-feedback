import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

export class Section extends Component {
  state = {};

  render() {
    const { title, children } = this.props;
    return (
      <section className={css.section}>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
