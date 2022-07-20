import React from "react";
import Topbar from "../components/Topbar/Topbar";
import ContentRowTop from "../components/ContentRowTop/ContentRowTop";
import Table from "../components/Table/Table";
import Footer from "../components/Footer/Footer";

class ContentWrapper extends React.Component {

	constructor(){
		super();
		this.state = {
			moviesList: [],
			tableColumns: []
		}
	}

	componentDidMount(){
		const url = "http://localhost:3030/api/productos";
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				let columns = ["id","nombre_producto","descripcion_producto","precio_producto"];
				this.setState({ moviesList: data.data, tableColumns: columns });
			})
			.catch((error) => console.error(error));
	}

	render(){
		return(
			<div id="content-wrapper" className="d-flex flex-column">			
				<div id="content">
	
					{/* <Topbar /> */}
	
					<ContentRowTop />
	
					<Table data={ this.state.moviesList } columns={ this.state.tableColumns } />
	
				</div>
				<Footer />
			</div>
		)
	}
}

export default ContentWrapper;