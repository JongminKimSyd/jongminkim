import React from 'react'

class PortfolioItem extends React.Component {
    render() {
        const item = this.props.portfolioItem;

        return (
            <div className="columns portfolio-item">
                <div className="item-wrap">
                    <a href={`#modal-${item.id}`} title={item.name}>
                        <img alt={item.name} src={item.thumbnailImageUrl} />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                                <h5>{item.name}</h5>
                                <p>{item.metaDescription}</p>
                            </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                </div>
            </div>
        );
    }
}

class PortfolioItemModal extends React.Component {
    render() {
        const item = this.props.portfolioItem;

        return (
            <div id={`modal-${item.id}`} className="popup-modal mfp-hide">
                <img className="scale-with-grid" src={item.heroImage} alt={item.name} />
                <div className="description-box">
                    <h4>{item.jobname}</h4>
                    <p>{item.jobdescription}</p>
                    <span className="categories"><i className="fa fa-tag" />{item.jobcategory}</span>
                </div>
                <div className="link-box">
                    {item.joburl.length > 0 &&
                    <a href={item.joburl}>Details</a>}
                    <a className="popup-modal-dismiss">Close</a>
                </div>
            </div>
        );
    }
}

export default class Portfolio extends React.Component {
    render() {
        const portfolioItems = [];
        const portfolioModalItems = [];
        const portfolioItemsData = this.props.works;

        portfolioItemsData.forEach((portfolioItem) => {
            portfolioItems.push(<PortfolioItem portfolioItem={portfolioItem} key={portfolioItem.name} />);
            portfolioModalItems.push(<PortfolioItemModal portfolioItem={portfolioItem} key={portfolioItem.name} />);
        });

        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works.</h1>
                        {/* portfolio-wrapper */}
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {portfolioItems}
                        </div> {/* portfolio-wrapper end */}
                    </div> {/* twelve columns end */}
                    {/* Modal Popup --------------------------------------------------------------- */}
                    {portfolioModalItems}
                </div> {/* row End */}
            </section>

        )
    }
}