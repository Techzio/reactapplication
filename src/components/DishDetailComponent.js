import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);        
    }
    renderDish(dish)
    {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(selecteddish)
    {
        if ((selecteddish) != null)
            {
            const comment = selecteddish.comments.map((comment)=>{
                 return(
                     <li>
                     <p>{comment.comment}</p>
                     <p>-- {comment.author} , {new Date(comment.date).toLocaleDateString()}</p>
                     </li>
                 )               
            });
            return(           
                <ul className = "list-unstyled">
                <h4>Comments</h4>
                {comment}
                </ul>
            );
            }
        else
            return(
                <div></div>
            );
     }

    render() {

        return (
            <div className="row">
             <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selecteddish)}
             </div>
             <div className="col- col-md-5 m-1">
                 {this.renderComments(this.props.selecteddish)}
             </div>
            </div>

        );
    }
}

export default DishDetail;