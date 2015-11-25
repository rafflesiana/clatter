// Compiled by ClojureScript 1.7.48 {}
goog.provide('clatter.core');
goog.require('cljs.core');
goog.require('clojure.string');
if(typeof clatter.core.PI !== 'undefined'){
} else {
clatter.core.PI = Math.PI;
}
if(typeof clatter.core.HALF_PI !== 'undefined'){
} else {
clatter.core.HALF_PI = (clatter.core.PI / (2));
}
if(typeof clatter.core.$ !== 'undefined'){
} else {
clatter.core.$ = jQuery;
}
if(typeof clatter.core.is_mobile !== 'undefined'){
} else {
clatter.core.is_mobile = cljs.core.some.call(null,(function (p1__6668_SHARP_){
return (navigator.userAgent.indexOf(p1__6668_SHARP_) >= (0));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["iPhone","iPad","iPod","Android"], null));
}
Physijs.scripts.worker = "js/physijs_worker.js";
Physijs.scripts.ammo = "ammo.js";

clatter.core.Sprite = {};

clatter.core.setup = (function clatter$core$setup(this$){
if((!((this$ == null))) && (!((this$.clatter$core$Sprite$setup$arity$1 == null)))){
return this$.clatter$core$Sprite$setup$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatter.core.setup[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatter.core.setup["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Sprite.setup",this$);
}
}
}
});

clatter.core.animate = (function clatter$core$animate(this$){
if((!((this$ == null))) && (!((this$.clatter$core$Sprite$animate$arity$1 == null)))){
return this$.clatter$core$Sprite$animate$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatter.core.animate[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatter.core.animate["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Sprite.animate",this$);
}
}
}
});


/**
* @constructor
* @param {*} mesh
* @param {*} pos
* @param {*} rot
* @param {*} force
* @param {*} need_force
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
clatter.core.TextSprite = (function (mesh,pos,rot,force,need_force,__meta,__extmap,__hash){
this.mesh = mesh;
this.pos = pos;
this.rot = rot;
this.force = force;
this.need_force = need_force;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
clatter.core.TextSprite.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5055__auto__,k__5056__auto__){
var self__ = this;
var this__5055__auto____$1 = this;
return cljs.core._lookup.call(null,this__5055__auto____$1,k__5056__auto__,null);
});

clatter.core.TextSprite.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5057__auto__,k6672,else__5058__auto__){
var self__ = this;
var this__5057__auto____$1 = this;
var G__6674 = (((k6672 instanceof cljs.core.Keyword))?k6672.fqn:null);
switch (G__6674) {
case "mesh":
return self__.mesh;

break;
case "pos":
return self__.pos;

break;
case "rot":
return self__.rot;

break;
case "force":
return self__.force;

break;
case "need-force":
return self__.need_force;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k6672,else__5058__auto__);

}
});

clatter.core.TextSprite.prototype.clatter$core$Sprite$ = true;

clatter.core.TextSprite.prototype.clatter$core$Sprite$setup$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
self__.mesh.collisions = (0);

self__.mesh.addEventListener("collision",((function (this$__$1){
return (function (other,linear_velocity,angular_velocity){
return cljs.core.reset_BANG_.call(null,self__.need_force,false);
});})(this$__$1))
);

self__.mesh.position.set(self__.pos.x,self__.pos.y,self__.pos.z);

self__.mesh.geometry.computeBoundingBox();

var max_6679 = self__.mesh.geometry.boundingBox.max;
var min_6680 = self__.mesh.geometry.boundingBox.min;
var x_6681 = (-0.5 * (max_6679.x - min_6680.x));
var y_6682 = (-0.5 * (max_6679.y - min_6680.y));
var z_6683 = (-0.5 * (max_6679.z - min_6680.z));
self__.mesh.geometry.applyMatrix((new THREE.Matrix4()).makeTranslation(x_6681,y_6682,z_6683));

return self__.mesh.rotation.set(self__.rot.x,self__.rot.y,self__.rot.z);
});

clatter.core.TextSprite.prototype.clatter$core$Sprite$animate$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.need_force))){
return self__.mesh.setLinearVelocity(self__.force);
} else {
return null;
}
});

clatter.core.TextSprite.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5069__auto__,writer__5070__auto__,opts__5071__auto__){
var self__ = this;
var this__5069__auto____$1 = this;
var pr_pair__5072__auto__ = ((function (this__5069__auto____$1){
return (function (keyval__5073__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5070__auto__,cljs.core.pr_writer,""," ","",opts__5071__auto__,keyval__5073__auto__);
});})(this__5069__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5070__auto__,pr_pair__5072__auto__,"#clatter.core.TextSprite{",", ","}",opts__5071__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mesh","mesh",456320595),self__.mesh],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rot","rot",757545242),self__.rot],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"force","force",781957286),self__.force],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"need-force","need-force",2025500833),self__.need_force],null))], null),self__.__extmap));
});

clatter.core.TextSprite.prototype.cljs$core$IIterable$ = true;

clatter.core.TextSprite.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6671){
var self__ = this;
var G__6671__$1 = this;
return (new cljs.core.RecordIter((0),G__6671__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"rot","rot",757545242),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"need-force","need-force",2025500833)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

clatter.core.TextSprite.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5053__auto__){
var self__ = this;
var this__5053__auto____$1 = this;
return self__.__meta;
});

clatter.core.TextSprite.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5049__auto__){
var self__ = this;
var this__5049__auto____$1 = this;
return (new clatter.core.TextSprite(self__.mesh,self__.pos,self__.rot,self__.force,self__.need_force,self__.__meta,self__.__extmap,self__.__hash));
});

clatter.core.TextSprite.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5059__auto__){
var self__ = this;
var this__5059__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

clatter.core.TextSprite.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5050__auto__){
var self__ = this;
var this__5050__auto____$1 = this;
var h__4876__auto__ = self__.__hash;
if(!((h__4876__auto__ == null))){
return h__4876__auto__;
} else {
var h__4876__auto____$1 = cljs.core.hash_imap.call(null,this__5050__auto____$1);
self__.__hash = h__4876__auto____$1;

return h__4876__auto____$1;
}
});

clatter.core.TextSprite.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5051__auto__,other__5052__auto__){
var self__ = this;
var this__5051__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4448__auto__ = other__5052__auto__;
if(cljs.core.truth_(and__4448__auto__)){
var and__4448__auto____$1 = (this__5051__auto____$1.constructor === other__5052__auto__.constructor);
if(and__4448__auto____$1){
return cljs.core.equiv_map.call(null,this__5051__auto____$1,other__5052__auto__);
} else {
return and__4448__auto____$1;
}
} else {
return and__4448__auto__;
}
})())){
return true;
} else {
return false;
}
});

clatter.core.TextSprite.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5064__auto__,k__5065__auto__){
var self__ = this;
var this__5064__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"need-force","need-force",2025500833),null,new cljs.core.Keyword(null,"force","force",781957286),null,new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"mesh","mesh",456320595),null,new cljs.core.Keyword(null,"rot","rot",757545242),null], null), null),k__5065__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5064__auto____$1),self__.__meta),k__5065__auto__);
} else {
return (new clatter.core.TextSprite(self__.mesh,self__.pos,self__.rot,self__.force,self__.need_force,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5065__auto__)),null));
}
});

clatter.core.TextSprite.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5062__auto__,k__5063__auto__,G__6671){
var self__ = this;
var this__5062__auto____$1 = this;
var pred__6675 = cljs.core.keyword_identical_QMARK_;
var expr__6676 = k__5063__auto__;
if(cljs.core.truth_(pred__6675.call(null,new cljs.core.Keyword(null,"mesh","mesh",456320595),expr__6676))){
return (new clatter.core.TextSprite(G__6671,self__.pos,self__.rot,self__.force,self__.need_force,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6675.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__6676))){
return (new clatter.core.TextSprite(self__.mesh,G__6671,self__.rot,self__.force,self__.need_force,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6675.call(null,new cljs.core.Keyword(null,"rot","rot",757545242),expr__6676))){
return (new clatter.core.TextSprite(self__.mesh,self__.pos,G__6671,self__.force,self__.need_force,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6675.call(null,new cljs.core.Keyword(null,"force","force",781957286),expr__6676))){
return (new clatter.core.TextSprite(self__.mesh,self__.pos,self__.rot,G__6671,self__.need_force,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6675.call(null,new cljs.core.Keyword(null,"need-force","need-force",2025500833),expr__6676))){
return (new clatter.core.TextSprite(self__.mesh,self__.pos,self__.rot,self__.force,G__6671,self__.__meta,self__.__extmap,null));
} else {
return (new clatter.core.TextSprite(self__.mesh,self__.pos,self__.rot,self__.force,self__.need_force,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5063__auto__,G__6671),null));
}
}
}
}
}
});

clatter.core.TextSprite.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5067__auto__){
var self__ = this;
var this__5067__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mesh","mesh",456320595),self__.mesh],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rot","rot",757545242),self__.rot],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"force","force",781957286),self__.force],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"need-force","need-force",2025500833),self__.need_force],null))], null),self__.__extmap));
});

clatter.core.TextSprite.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5054__auto__,G__6671){
var self__ = this;
var this__5054__auto____$1 = this;
return (new clatter.core.TextSprite(self__.mesh,self__.pos,self__.rot,self__.force,self__.need_force,G__6671,self__.__extmap,self__.__hash));
});

clatter.core.TextSprite.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5060__auto__,entry__5061__auto__){
var self__ = this;
var this__5060__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5061__auto__)){
return cljs.core._assoc.call(null,this__5060__auto____$1,cljs.core._nth.call(null,entry__5061__auto__,(0)),cljs.core._nth.call(null,entry__5061__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5060__auto____$1,entry__5061__auto__);
}
});

clatter.core.TextSprite.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mesh","mesh",2096852122,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.Symbol(null,"rot","rot",-1896890527,null),new cljs.core.Symbol(null,"force","force",-1872478483,null),new cljs.core.Symbol(null,"need-force","need-force",-628934936,null)], null);
});

clatter.core.TextSprite.cljs$lang$type = true;

clatter.core.TextSprite.cljs$lang$ctorPrSeq = (function (this__5089__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clatter.core/TextSprite");
});

clatter.core.TextSprite.cljs$lang$ctorPrWriter = (function (this__5089__auto__,writer__5090__auto__){
return cljs.core._write.call(null,writer__5090__auto__,"clatter.core/TextSprite");
});

clatter.core.__GT_TextSprite = (function clatter$core$__GT_TextSprite(mesh,pos,rot,force,need_force){
return (new clatter.core.TextSprite(mesh,pos,rot,force,need_force,null,null,null));
});

clatter.core.map__GT_TextSprite = (function clatter$core$map__GT_TextSprite(G__6673){
return (new clatter.core.TextSprite(new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(G__6673),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__6673),new cljs.core.Keyword(null,"rot","rot",757545242).cljs$core$IFn$_invoke$arity$1(G__6673),new cljs.core.Keyword(null,"force","force",781957286).cljs$core$IFn$_invoke$arity$1(G__6673),new cljs.core.Keyword(null,"need-force","need-force",2025500833).cljs$core$IFn$_invoke$arity$1(G__6673),null,cljs.core.dissoc.call(null,G__6673,new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"rot","rot",757545242),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"need-force","need-force",2025500833)),null));
});


clatter.core.IWorld = {};

clatter.core.spawn = (function clatter$core$spawn(this$){
if((!((this$ == null))) && (!((this$.clatter$core$IWorld$spawn$arity$1 == null)))){
return this$.clatter$core$IWorld$spawn$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatter.core.spawn[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatter.core.spawn["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWorld.spawn",this$);
}
}
}
});

clatter.core.update_projector = (function clatter$core$update_projector(this$){
if((!((this$ == null))) && (!((this$.clatter$core$IWorld$update_projector$arity$1 == null)))){
return this$.clatter$core$IWorld$update_projector$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatter.core.update_projector[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatter.core.update_projector["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWorld.update-projector",this$);
}
}
}
});

clatter.core.put_boundary = (function clatter$core$put_boundary(this$){
if((!((this$ == null))) && (!((this$.clatter$core$IWorld$put_boundary$arity$1 == null)))){
return this$.clatter$core$IWorld$put_boundary$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatter.core.put_boundary[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatter.core.put_boundary["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWorld.put-boundary",this$);
}
}
}
});

clatter.core.put_plane = (function clatter$core$put_plane(this$,pos,rot){
if((!((this$ == null))) && (!((this$.clatter$core$IWorld$put_plane$arity$3 == null)))){
return this$.clatter$core$IWorld$put_plane$arity$3(this$,pos,rot);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatter.core.put_plane[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$,pos,rot);
} else {
var m__5097__auto____$1 = (clatter.core.put_plane["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$,pos,rot);
} else {
throw cljs.core.missing_protocol.call(null,"IWorld.put-plane",this$);
}
}
}
});

clatter.core.put_text = (function clatter$core$put_text(this$,text){
if((!((this$ == null))) && (!((this$.clatter$core$IWorld$put_text$arity$2 == null)))){
return this$.clatter$core$IWorld$put_text$arity$2(this$,text);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatter.core.put_text[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$,text);
} else {
var m__5097__auto____$1 = (clatter.core.put_text["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$,text);
} else {
throw cljs.core.missing_protocol.call(null,"IWorld.put-text",this$);
}
}
}
});

clatter.core.delete_old_text = (function clatter$core$delete_old_text(this$){
if((!((this$ == null))) && (!((this$.clatter$core$IWorld$delete_old_text$arity$1 == null)))){
return this$.clatter$core$IWorld$delete_old_text$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatter.core.delete_old_text[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatter.core.delete_old_text["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWorld.delete-old-text",this$);
}
}
}
});

clatter.core.clear_texts = (function clatter$core$clear_texts(this$){
if((!((this$ == null))) && (!((this$.clatter$core$IWorld$clear_texts$arity$1 == null)))){
return this$.clatter$core$IWorld$clear_texts$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatter.core.clear_texts[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatter.core.clear_texts["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWorld.clear-texts",this$);
}
}
}
});

clatter.core.render = (function clatter$core$render(this$){
if((!((this$ == null))) && (!((this$.clatter$core$IWorld$render$arity$1 == null)))){
return this$.clatter$core$IWorld$render$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatter.core.render[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatter.core.render["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWorld.render",this$);
}
}
}
});


/**
* @constructor
* @param {*} border_length
* @param {*} scene
* @param {*} camera
* @param {*} light
* @param {*} renderer
* @param {*} controls
* @param {*} sprites
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
clatter.core.World = (function (border_length,scene,camera,light,renderer,controls,sprites,__meta,__extmap,__hash){
this.border_length = border_length;
this.scene = scene;
this.camera = camera;
this.light = light;
this.renderer = renderer;
this.controls = controls;
this.sprites = sprites;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
clatter.core.World.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5055__auto__,k__5056__auto__){
var self__ = this;
var this__5055__auto____$1 = this;
return cljs.core._lookup.call(null,this__5055__auto____$1,k__5056__auto__,null);
});

clatter.core.World.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5057__auto__,k6688,else__5058__auto__){
var self__ = this;
var this__5057__auto____$1 = this;
var G__6690 = (((k6688 instanceof cljs.core.Keyword))?k6688.fqn:null);
switch (G__6690) {
case "border-length":
return self__.border_length;

break;
case "scene":
return self__.scene;

break;
case "camera":
return self__.camera;

break;
case "light":
return self__.light;

break;
case "renderer":
return self__.renderer;

break;
case "controls":
return self__.controls;

break;
case "sprites":
return self__.sprites;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k6688,else__5058__auto__);

}
});

clatter.core.World.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5069__auto__,writer__5070__auto__,opts__5071__auto__){
var self__ = this;
var this__5069__auto____$1 = this;
var pr_pair__5072__auto__ = ((function (this__5069__auto____$1){
return (function (keyval__5073__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5070__auto__,cljs.core.pr_writer,""," ","",opts__5071__auto__,keyval__5073__auto__);
});})(this__5069__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5070__auto__,pr_pair__5072__auto__,"#clatter.core.World{",", ","}",opts__5071__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"border-length","border-length",1679736874),self__.border_length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"light","light",1918998747),self__.light],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sprites","sprites",-1835833922),self__.sprites],null))], null),self__.__extmap));
});

clatter.core.World.prototype.cljs$core$IIterable$ = true;

clatter.core.World.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6687){
var self__ = this;
var G__6687__$1 = this;
return (new cljs.core.RecordIter((0),G__6687__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"border-length","border-length",1679736874),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"sprites","sprites",-1835833922)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

clatter.core.World.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5053__auto__){
var self__ = this;
var this__5053__auto____$1 = this;
return self__.__meta;
});

clatter.core.World.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5049__auto__){
var self__ = this;
var this__5049__auto____$1 = this;
return (new clatter.core.World(self__.border_length,self__.scene,self__.camera,self__.light,self__.renderer,self__.controls,self__.sprites,self__.__meta,self__.__extmap,self__.__hash));
});

clatter.core.World.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5059__auto__){
var self__ = this;
var this__5059__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

clatter.core.World.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5050__auto__){
var self__ = this;
var this__5050__auto____$1 = this;
var h__4876__auto__ = self__.__hash;
if(!((h__4876__auto__ == null))){
return h__4876__auto__;
} else {
var h__4876__auto____$1 = cljs.core.hash_imap.call(null,this__5050__auto____$1);
self__.__hash = h__4876__auto____$1;

return h__4876__auto____$1;
}
});

clatter.core.World.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5051__auto__,other__5052__auto__){
var self__ = this;
var this__5051__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4448__auto__ = other__5052__auto__;
if(cljs.core.truth_(and__4448__auto__)){
var and__4448__auto____$1 = (this__5051__auto____$1.constructor === other__5052__auto__.constructor);
if(and__4448__auto____$1){
return cljs.core.equiv_map.call(null,this__5051__auto____$1,other__5052__auto__);
} else {
return and__4448__auto____$1;
}
} else {
return and__4448__auto__;
}
})())){
return true;
} else {
return false;
}
});

clatter.core.World.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5064__auto__,k__5065__auto__){
var self__ = this;
var this__5064__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border-length","border-length",1679736874),null,new cljs.core.Keyword(null,"controls","controls",1340701452),null,new cljs.core.Keyword(null,"renderer","renderer",336841071),null,new cljs.core.Keyword(null,"camera","camera",-1190348585),null,new cljs.core.Keyword(null,"light","light",1918998747),null,new cljs.core.Keyword(null,"sprites","sprites",-1835833922),null,new cljs.core.Keyword(null,"scene","scene",1523800415),null], null), null),k__5065__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5064__auto____$1),self__.__meta),k__5065__auto__);
} else {
return (new clatter.core.World(self__.border_length,self__.scene,self__.camera,self__.light,self__.renderer,self__.controls,self__.sprites,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5065__auto__)),null));
}
});

clatter.core.World.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5062__auto__,k__5063__auto__,G__6687){
var self__ = this;
var this__5062__auto____$1 = this;
var pred__6691 = cljs.core.keyword_identical_QMARK_;
var expr__6692 = k__5063__auto__;
if(cljs.core.truth_(pred__6691.call(null,new cljs.core.Keyword(null,"border-length","border-length",1679736874),expr__6692))){
return (new clatter.core.World(G__6687,self__.scene,self__.camera,self__.light,self__.renderer,self__.controls,self__.sprites,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6691.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415),expr__6692))){
return (new clatter.core.World(self__.border_length,G__6687,self__.camera,self__.light,self__.renderer,self__.controls,self__.sprites,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6691.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__6692))){
return (new clatter.core.World(self__.border_length,self__.scene,G__6687,self__.light,self__.renderer,self__.controls,self__.sprites,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6691.call(null,new cljs.core.Keyword(null,"light","light",1918998747),expr__6692))){
return (new clatter.core.World(self__.border_length,self__.scene,self__.camera,G__6687,self__.renderer,self__.controls,self__.sprites,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6691.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071),expr__6692))){
return (new clatter.core.World(self__.border_length,self__.scene,self__.camera,self__.light,G__6687,self__.controls,self__.sprites,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6691.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452),expr__6692))){
return (new clatter.core.World(self__.border_length,self__.scene,self__.camera,self__.light,self__.renderer,G__6687,self__.sprites,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6691.call(null,new cljs.core.Keyword(null,"sprites","sprites",-1835833922),expr__6692))){
return (new clatter.core.World(self__.border_length,self__.scene,self__.camera,self__.light,self__.renderer,self__.controls,G__6687,self__.__meta,self__.__extmap,null));
} else {
return (new clatter.core.World(self__.border_length,self__.scene,self__.camera,self__.light,self__.renderer,self__.controls,self__.sprites,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5063__auto__,G__6687),null));
}
}
}
}
}
}
}
});

clatter.core.World.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5067__auto__){
var self__ = this;
var this__5067__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"border-length","border-length",1679736874),self__.border_length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"light","light",1918998747),self__.light],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sprites","sprites",-1835833922),self__.sprites],null))], null),self__.__extmap));
});

clatter.core.World.prototype.clatter$core$IWorld$ = true;

clatter.core.World.prototype.clatter$core$IWorld$spawn$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
self__.scene.setGravity((new THREE.Vector3((0),(0),(0))));

self__.renderer.setClearColor((16777215));

self__.camera.position.set((0),(0),self__.border_length);

self__.scene.add(self__.light);

self__.scene.add((new THREE.AmbientLight((4473924))));

clatter.core.put_boundary.call(null,this$__$1);

return clatter.core.update_projector.call(null,this$__$1);
});

clatter.core.World.prototype.clatter$core$IWorld$update_projector$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var width = window.innerWidth;
var height = window.innerHeight;
self__.renderer.setSize(width,height);

self__.camera.aspect = (width / height);

return self__.camera.updateProjectionMatrix();
});

clatter.core.World.prototype.clatter$core$IWorld$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function clatter$core$render_frame(){
self__.controls.update();

var pos_6715 = self__.camera.position;
self__.light.position.set(pos_6715.x,pos_6715.y,pos_6715.z).normalize();

var seq__6698_6716 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.sprites));
var chunk__6699_6717 = null;
var count__6700_6718 = (0);
var i__6701_6719 = (0);
while(true){
if((i__6701_6719 < count__6700_6718)){
var sprite_6720 = cljs.core._nth.call(null,chunk__6699_6717,i__6701_6719);
clatter.core.animate.call(null,sprite_6720);

var G__6721 = seq__6698_6716;
var G__6722 = chunk__6699_6717;
var G__6723 = count__6700_6718;
var G__6724 = (i__6701_6719 + (1));
seq__6698_6716 = G__6721;
chunk__6699_6717 = G__6722;
count__6700_6718 = G__6723;
i__6701_6719 = G__6724;
continue;
} else {
var temp__4425__auto___6725 = cljs.core.seq.call(null,seq__6698_6716);
if(temp__4425__auto___6725){
var seq__6698_6726__$1 = temp__4425__auto___6725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6698_6726__$1)){
var c__5244__auto___6727 = cljs.core.chunk_first.call(null,seq__6698_6726__$1);
var G__6728 = cljs.core.chunk_rest.call(null,seq__6698_6726__$1);
var G__6729 = c__5244__auto___6727;
var G__6730 = cljs.core.count.call(null,c__5244__auto___6727);
var G__6731 = (0);
seq__6698_6716 = G__6728;
chunk__6699_6717 = G__6729;
count__6700_6718 = G__6730;
i__6701_6719 = G__6731;
continue;
} else {
var sprite_6732 = cljs.core.first.call(null,seq__6698_6726__$1);
clatter.core.animate.call(null,sprite_6732);

var G__6733 = cljs.core.next.call(null,seq__6698_6726__$1);
var G__6734 = null;
var G__6735 = (0);
var G__6736 = (0);
seq__6698_6716 = G__6733;
chunk__6699_6717 = G__6734;
count__6700_6718 = G__6735;
i__6701_6719 = G__6736;
continue;
}
} else {
}
}
break;
}

self__.scene.simulate();

self__.renderer.render(self__.scene,self__.camera);

return requestAnimationFrame(clatter$core$render_frame);
});})(this$__$1))
.call(null);
});

clatter.core.World.prototype.clatter$core$IWorld$put_boundary$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var half_border = (self__.border_length / (2));
var seq__6702 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(- half_border)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),half_border], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- half_border),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clatter.core.HALF_PI,(0),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),half_border,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clatter.core.HALF_PI,(0),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- half_border),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),clatter.core.HALF_PI,(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [half_border,(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),clatter.core.HALF_PI,(0)], null)], null)], null));
var chunk__6703 = null;
var count__6704 = (0);
var i__6705 = (0);
while(true){
if((i__6705 < count__6704)){
var vec__6706 = cljs.core._nth.call(null,chunk__6703,i__6705);
var pos = cljs.core.nth.call(null,vec__6706,(0),null);
var rot = cljs.core.nth.call(null,vec__6706,(1),null);
clatter.core.put_plane.call(null,this$__$1,pos,rot);

var G__6737 = seq__6702;
var G__6738 = chunk__6703;
var G__6739 = count__6704;
var G__6740 = (i__6705 + (1));
seq__6702 = G__6737;
chunk__6703 = G__6738;
count__6704 = G__6739;
i__6705 = G__6740;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6702);
if(temp__4425__auto__){
var seq__6702__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6702__$1)){
var c__5244__auto__ = cljs.core.chunk_first.call(null,seq__6702__$1);
var G__6741 = cljs.core.chunk_rest.call(null,seq__6702__$1);
var G__6742 = c__5244__auto__;
var G__6743 = cljs.core.count.call(null,c__5244__auto__);
var G__6744 = (0);
seq__6702 = G__6741;
chunk__6703 = G__6742;
count__6704 = G__6743;
i__6705 = G__6744;
continue;
} else {
var vec__6707 = cljs.core.first.call(null,seq__6702__$1);
var pos = cljs.core.nth.call(null,vec__6707,(0),null);
var rot = cljs.core.nth.call(null,vec__6707,(1),null);
clatter.core.put_plane.call(null,this$__$1,pos,rot);

var G__6745 = cljs.core.next.call(null,seq__6702__$1);
var G__6746 = null;
var G__6747 = (0);
var G__6748 = (0);
seq__6702 = G__6745;
chunk__6703 = G__6746;
count__6704 = G__6747;
i__6705 = G__6748;
continue;
}
} else {
return null;
}
}
break;
}
});

clatter.core.World.prototype.clatter$core$IWorld$put_plane$arity$3 = (function (this$,pos,rot){
var self__ = this;
var this$__$1 = this;
var geometry = (new THREE.PlaneGeometry(self__.border_length,self__.border_length,(1),(1)));
var material = Physijs.createMaterial((new THREE.MeshPhongMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"wireframe","wireframe",1009957322),false,new cljs.core.Keyword(null,"transparent","transparent",-2073609949),true,new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"color","color",1011675173),(14540253)], null)))),(0),0.7);
var mesh = (new Physijs.BoxMesh(geometry,material,(0)));
var vec__6708_6749 = pos;
var x_6750 = cljs.core.nth.call(null,vec__6708_6749,(0),null);
var y_6751 = cljs.core.nth.call(null,vec__6708_6749,(1),null);
var z_6752 = cljs.core.nth.call(null,vec__6708_6749,(2),null);
mesh.position.set(x_6750,y_6751,z_6752);

var vec__6709_6753 = rot;
var x_6754 = cljs.core.nth.call(null,vec__6709_6753,(0),null);
var y_6755 = cljs.core.nth.call(null,vec__6709_6753,(1),null);
var z_6756 = cljs.core.nth.call(null,vec__6709_6753,(2),null);
mesh.rotation.set(x_6754,y_6755,z_6756);

mesh.collisions = (0);

return self__.scene.add(mesh);
});

clatter.core.World.prototype.clatter$core$IWorld$put_text$arity$2 = (function (this$,text){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,cljs.core.deref.call(null,self__.sprites)) >= (300))){
clatter.core.delete_old_text.call(null,this$__$1);
} else {
}

var size = (self__.border_length / (5));
var geometry = (new THREE.TextGeometry(text,cljs.core.clj__GT_js.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curveSegments","curveSegments",-1293134970),new cljs.core.Keyword(null,"bevelEnabled","bevelEnabled",833782601),new cljs.core.Keyword(null,"bevelSize","bevelSize",-1203060022),new cljs.core.Keyword(null,"bevelThickness","bevelThickness",1360311084),new cljs.core.Keyword(null,"bevelSegments","bevelSegments",1785213485),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"height","height",1025178622)],[(3),false,1.5,(2),(2),"helvetiker",size,"normal","bold",(50)]))));
var material = Physijs.createMaterial((new THREE.MeshPhongMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),((16777215) * Math.random()),new cljs.core.Keyword(null,"shading","shading",-637548494),THREE.SmoothShading], null)))),(0),0.2);
var mesh = (new Physijs.BoxMesh(geometry,material));
var camera_pos = self__.camera.position;
var sprite = (new clatter.core.TextSprite(mesh,camera_pos.clone().multiplyScalar(0.45),self__.camera.rotation,camera_pos.clone().negate(),cljs.core.atom.call(null,true),null,null,null));
sprite.clatter$core$Sprite$setup$arity$1(null);

cljs.core.swap_BANG_.call(null,self__.sprites,cljs.core.conj,sprite);

return self__.scene.add(mesh);
});

clatter.core.World.prototype.clatter$core$IWorld$clear_texts$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__6710_6757 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.sprites));
var chunk__6711_6758 = null;
var count__6712_6759 = (0);
var i__6713_6760 = (0);
while(true){
if((i__6713_6760 < count__6712_6759)){
var sprite_6761 = cljs.core._nth.call(null,chunk__6711_6758,i__6713_6760);
self__.scene.remove(cljs.core.get.call(null,sprite_6761,new cljs.core.Keyword(null,"mesh","mesh",456320595)));

var G__6762 = seq__6710_6757;
var G__6763 = chunk__6711_6758;
var G__6764 = count__6712_6759;
var G__6765 = (i__6713_6760 + (1));
seq__6710_6757 = G__6762;
chunk__6711_6758 = G__6763;
count__6712_6759 = G__6764;
i__6713_6760 = G__6765;
continue;
} else {
var temp__4425__auto___6766 = cljs.core.seq.call(null,seq__6710_6757);
if(temp__4425__auto___6766){
var seq__6710_6767__$1 = temp__4425__auto___6766;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6710_6767__$1)){
var c__5244__auto___6768 = cljs.core.chunk_first.call(null,seq__6710_6767__$1);
var G__6769 = cljs.core.chunk_rest.call(null,seq__6710_6767__$1);
var G__6770 = c__5244__auto___6768;
var G__6771 = cljs.core.count.call(null,c__5244__auto___6768);
var G__6772 = (0);
seq__6710_6757 = G__6769;
chunk__6711_6758 = G__6770;
count__6712_6759 = G__6771;
i__6713_6760 = G__6772;
continue;
} else {
var sprite_6773 = cljs.core.first.call(null,seq__6710_6767__$1);
self__.scene.remove(cljs.core.get.call(null,sprite_6773,new cljs.core.Keyword(null,"mesh","mesh",456320595)));

var G__6774 = cljs.core.next.call(null,seq__6710_6767__$1);
var G__6775 = null;
var G__6776 = (0);
var G__6777 = (0);
seq__6710_6757 = G__6774;
chunk__6711_6758 = G__6775;
count__6712_6759 = G__6776;
i__6713_6760 = G__6777;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,self__.sprites,cljs.core.List.EMPTY);
});

clatter.core.World.prototype.clatter$core$IWorld$delete_old_text$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sprite = cljs.core.last.call(null,cljs.core.deref.call(null,self__.sprites));
var updated_sprites = cljs.core.remove.call(null,((function (sprite,this$__$1){
return (function (p1__6686_SHARP_){
return cljs.core._EQ_.call(null,p1__6686_SHARP_,sprite);
});})(sprite,this$__$1))
,cljs.core.deref.call(null,self__.sprites));
self__.scene.remove(cljs.core.get.call(null,sprite,new cljs.core.Keyword(null,"mesh","mesh",456320595)));

return cljs.core.reset_BANG_.call(null,self__.sprites,updated_sprites);
});

clatter.core.World.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5054__auto__,G__6687){
var self__ = this;
var this__5054__auto____$1 = this;
return (new clatter.core.World(self__.border_length,self__.scene,self__.camera,self__.light,self__.renderer,self__.controls,self__.sprites,G__6687,self__.__extmap,self__.__hash));
});

clatter.core.World.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5060__auto__,entry__5061__auto__){
var self__ = this;
var this__5060__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5061__auto__)){
return cljs.core._assoc.call(null,this__5060__auto____$1,cljs.core._nth.call(null,entry__5061__auto__,(0)),cljs.core._nth.call(null,entry__5061__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5060__auto____$1,entry__5061__auto__);
}
});

clatter.core.World.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"border-length","border-length",-974698895,null),new cljs.core.Symbol(null,"scene","scene",-1130635354,null),new cljs.core.Symbol(null,"camera","camera",450182942,null),new cljs.core.Symbol(null,"light","light",-735437022,null),new cljs.core.Symbol(null,"renderer","renderer",1977372598,null),new cljs.core.Symbol(null,"controls","controls",-1313734317,null),new cljs.core.Symbol(null,"sprites","sprites",-195302395,null)], null);
});

clatter.core.World.cljs$lang$type = true;

clatter.core.World.cljs$lang$ctorPrSeq = (function (this__5089__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clatter.core/World");
});

clatter.core.World.cljs$lang$ctorPrWriter = (function (this__5089__auto__,writer__5090__auto__){
return cljs.core._write.call(null,writer__5090__auto__,"clatter.core/World");
});

clatter.core.__GT_World = (function clatter$core$__GT_World(border_length,scene,camera,light,renderer,controls,sprites){
return (new clatter.core.World(border_length,scene,camera,light,renderer,controls,sprites,null,null,null));
});

clatter.core.map__GT_World = (function clatter$core$map__GT_World(G__6689){
return (new clatter.core.World(new cljs.core.Keyword(null,"border-length","border-length",1679736874).cljs$core$IFn$_invoke$arity$1(G__6689),new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(G__6689),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(G__6689),new cljs.core.Keyword(null,"light","light",1918998747).cljs$core$IFn$_invoke$arity$1(G__6689),new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(G__6689),new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(G__6689),new cljs.core.Keyword(null,"sprites","sprites",-1835833922).cljs$core$IFn$_invoke$arity$1(G__6689),null,cljs.core.dissoc.call(null,G__6689,new cljs.core.Keyword(null,"border-length","border-length",1679736874),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"sprites","sprites",-1835833922)),null));
});


clatter.core.IApplication = {};

clatter.core.start = (function clatter$core$start(this$){
if((!((this$ == null))) && (!((this$.clatter$core$IApplication$start$arity$1 == null)))){
return this$.clatter$core$IApplication$start$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatter.core.start[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatter.core.start["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IApplication.start",this$);
}
}
}
});

clatter.core.bind = (function clatter$core$bind(this$){
if((!((this$ == null))) && (!((this$.clatter$core$IApplication$bind$arity$1 == null)))){
return this$.clatter$core$IApplication$bind$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatter.core.bind[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatter.core.bind["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IApplication.bind",this$);
}
}
}
});

clatter.core.sound = (function clatter$core$sound(this$,evt){
if((!((this$ == null))) && (!((this$.clatter$core$IApplication$sound$arity$2 == null)))){
return this$.clatter$core$IApplication$sound$arity$2(this$,evt);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatter.core.sound[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$,evt);
} else {
var m__5097__auto____$1 = (clatter.core.sound["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$,evt);
} else {
throw cljs.core.missing_protocol.call(null,"IApplication.sound",this$);
}
}
}
});

clatter.core.play_sound = (function clatter$core$play_sound(this$,text){
if((!((this$ == null))) && (!((this$.clatter$core$IApplication$play_sound$arity$2 == null)))){
return this$.clatter$core$IApplication$play_sound$arity$2(this$,text);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatter.core.play_sound[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$,text);
} else {
var m__5097__auto____$1 = (clatter.core.play_sound["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$,text);
} else {
throw cljs.core.missing_protocol.call(null,"IApplication.play-sound",this$);
}
}
}
});

clatter.core.clear = (function clatter$core$clear(this$,evt){
if((!((this$ == null))) && (!((this$.clatter$core$IApplication$clear$arity$2 == null)))){
return this$.clatter$core$IApplication$clear$arity$2(this$,evt);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatter.core.clear[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$,evt);
} else {
var m__5097__auto____$1 = (clatter.core.clear["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$,evt);
} else {
throw cljs.core.missing_protocol.call(null,"IApplication.clear",this$);
}
}
}
});

clatter.core.keypress = (function clatter$core$keypress(this$,evt){
if((!((this$ == null))) && (!((this$.clatter$core$IApplication$keypress$arity$2 == null)))){
return this$.clatter$core$IApplication$keypress$arity$2(this$,evt);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatter.core.keypress[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$,evt);
} else {
var m__5097__auto____$1 = (clatter.core.keypress["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$,evt);
} else {
throw cljs.core.missing_protocol.call(null,"IApplication.keypress",this$);
}
}
}
});

clatter.core.message = (function clatter$core$message(this$){
if((!((this$ == null))) && (!((this$.clatter$core$IApplication$message$arity$1 == null)))){
return this$.clatter$core$IApplication$message$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatter.core.message[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatter.core.message["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IApplication.message",this$);
}
}
}
});

clatter.core.resize = (function clatter$core$resize(this$){
if((!((this$ == null))) && (!((this$.clatter$core$IApplication$resize$arity$1 == null)))){
return this$.clatter$core$IApplication$resize$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatter.core.resize[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatter.core.resize["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IApplication.resize",this$);
}
}
}
});


/**
* @constructor
* @param {*} world
* @param {*} audio_map
* @param {*} mute
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
clatter.core.Clatter = (function (world,audio_map,mute,__meta,__extmap,__hash){
this.world = world;
this.audio_map = audio_map;
this.mute = mute;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
clatter.core.Clatter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5055__auto__,k__5056__auto__){
var self__ = this;
var this__5055__auto____$1 = this;
return cljs.core._lookup.call(null,this__5055__auto____$1,k__5056__auto__,null);
});

clatter.core.Clatter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5057__auto__,k6781,else__5058__auto__){
var self__ = this;
var this__5057__auto____$1 = this;
var G__6783 = (((k6781 instanceof cljs.core.Keyword))?k6781.fqn:null);
switch (G__6783) {
case "world":
return self__.world;

break;
case "audio-map":
return self__.audio_map;

break;
case "mute":
return self__.mute;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k6781,else__5058__auto__);

}
});

clatter.core.Clatter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5069__auto__,writer__5070__auto__,opts__5071__auto__){
var self__ = this;
var this__5069__auto____$1 = this;
var pr_pair__5072__auto__ = ((function (this__5069__auto____$1){
return (function (keyval__5073__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5070__auto__,cljs.core.pr_writer,""," ","",opts__5071__auto__,keyval__5073__auto__);
});})(this__5069__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5070__auto__,pr_pair__5072__auto__,"#clatter.core.Clatter{",", ","}",opts__5071__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"world","world",-418292623),self__.world],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"audio-map","audio-map",-1898972372),self__.audio_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mute","mute",1151223646),self__.mute],null))], null),self__.__extmap));
});

clatter.core.Clatter.prototype.cljs$core$IIterable$ = true;

clatter.core.Clatter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6780){
var self__ = this;
var G__6780__$1 = this;
return (new cljs.core.RecordIter((0),G__6780__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),new cljs.core.Keyword(null,"audio-map","audio-map",-1898972372),new cljs.core.Keyword(null,"mute","mute",1151223646)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

clatter.core.Clatter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5053__auto__){
var self__ = this;
var this__5053__auto____$1 = this;
return self__.__meta;
});

clatter.core.Clatter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5049__auto__){
var self__ = this;
var this__5049__auto____$1 = this;
return (new clatter.core.Clatter(self__.world,self__.audio_map,self__.mute,self__.__meta,self__.__extmap,self__.__hash));
});

clatter.core.Clatter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5059__auto__){
var self__ = this;
var this__5059__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

clatter.core.Clatter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5050__auto__){
var self__ = this;
var this__5050__auto____$1 = this;
var h__4876__auto__ = self__.__hash;
if(!((h__4876__auto__ == null))){
return h__4876__auto__;
} else {
var h__4876__auto____$1 = cljs.core.hash_imap.call(null,this__5050__auto____$1);
self__.__hash = h__4876__auto____$1;

return h__4876__auto____$1;
}
});

clatter.core.Clatter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5051__auto__,other__5052__auto__){
var self__ = this;
var this__5051__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4448__auto__ = other__5052__auto__;
if(cljs.core.truth_(and__4448__auto__)){
var and__4448__auto____$1 = (this__5051__auto____$1.constructor === other__5052__auto__.constructor);
if(and__4448__auto____$1){
return cljs.core.equiv_map.call(null,this__5051__auto____$1,other__5052__auto__);
} else {
return and__4448__auto____$1;
}
} else {
return and__4448__auto__;
}
})())){
return true;
} else {
return false;
}
});

clatter.core.Clatter.prototype.clatter$core$IApplication$ = true;

clatter.core.Clatter.prototype.clatter$core$IApplication$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
clatter.core.spawn.call(null,self__.world);

clatter.core.bind.call(null,this$__$1);

clatter.core.render.call(null,self__.world);

return clatter.core.message.call(null,this$__$1);
});

clatter.core.Clatter.prototype.clatter$core$IApplication$bind$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
clatter.core.$.call(null,"#sound-button").on("click",((function (this$__$1){
return (function (evt){
return clatter.core.sound.call(null,this$__$1,evt);
});})(this$__$1))
);

clatter.core.$.call(null,"#clear-button").on("click",((function (this$__$1){
return (function (evt){
return clatter.core.clear.call(null,this$__$1,evt);
});})(this$__$1))
);

if(cljs.core.truth_(clatter.core.is_mobile)){
clatter.core.$.call(null,"#keyboard-button").removeClass("hidden").on("click",((function (this$__$1){
return (function (){
return clatter.core.$.call(null,"input").focus();
});})(this$__$1))
);
} else {
}

clatter.core.$.call(null,document).keypress(((function (this$__$1){
return (function (evt){
return clatter.core.keypress.call(null,this$__$1,evt);
});})(this$__$1))
);

clatter.core.$.call(null,window).resize(((function (this$__$1){
return (function (evt){
return clatter.core.resize.call(null,this$__$1);
});})(this$__$1))
);

return document.body.appendChild(new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(self__.world).domElement);
});

clatter.core.Clatter.prototype.clatter$core$IApplication$sound$arity$2 = (function (this$,evt){
var self__ = this;
var this$__$1 = this;
var $sound_button = clatter.core.$.call(null,"#sound-button");
var $i = clatter.core.$.call(null,"#sound-button > i");
var is_mute = $sound_button.hasClass("mute");
var vec__6784 = (cljs.core.truth_(is_mute)?(function (){
$sound_button.removeClass("mute");

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fa-volume-off","fa-volume-up"], null);
})()
:(function (){
$sound_button.addClass("mute");

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fa-volume-up","fa-volume-off"], null);
})()
);
var remove = cljs.core.nth.call(null,vec__6784,(0),null);
var add = cljs.core.nth.call(null,vec__6784,(1),null);
$i.removeClass(remove).addClass(add);

return cljs.core.reset_BANG_.call(null,self__.mute,cljs.core.not.call(null,is_mute));
});

clatter.core.Clatter.prototype.clatter$core$IApplication$play_sound$arity$2 = (function (this$,text){
var self__ = this;
var this$__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,self__.audio_map,text);
if(cljs.core.truth_(temp__4425__auto__)){
var audio_tag = temp__4425__auto__;
if(cljs.core.truth_(audio_tag.ended)){
} else {
audio_tag.pause();

audio_tag.currentTime = (0);
}

return audio_tag.play();
} else {
return null;
}
});

clatter.core.Clatter.prototype.clatter$core$IApplication$clear$arity$2 = (function (this$,evt){
var self__ = this;
var this$__$1 = this;
return clatter.core.clear_texts.call(null,self__.world);
});

clatter.core.Clatter.prototype.clatter$core$IApplication$keypress$arity$2 = (function (this$,evt){
var self__ = this;
var this$__$1 = this;
var code = (cljs.core.truth_(evt)?evt.charCode:event.charCode);
if((code <= (32))){
return null;
} else {
var char$ = String.fromCharCode(code).toUpperCase();
if(cljs.core.truth_(cljs.core.deref.call(null,self__.mute))){
} else {
clatter.core.play_sound.call(null,this$__$1,char$);
}

return clatter.core.put_text.call(null,self__.world,char$);
}
});

clatter.core.Clatter.prototype.clatter$core$IApplication$message$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var $message = clatter.core.$.call(null,"<div/>","message");
$message.text([cljs.core.str((cljs.core.truth_(clatter.core.is_mobile)?"Tap Here and ":null)),cljs.core.str("Type Something.")].join('')).on("click",((function ($message,this$__$1){
return (function (){
return clatter.core.$.call(null,"input").focus();
});})($message,this$__$1))
).addClass("message").insertAfter("header").fadeIn((5000));

return document.addEventListener("keypress",((function ($message,this$__$1){
return (function clatter$core$remove_message(){
$message.remove();

return document.removeEventListener("keypress",clatter$core$remove_message);
});})($message,this$__$1))
);
});

clatter.core.Clatter.prototype.clatter$core$IApplication$resize$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return clatter.core.update_projector.call(null,self__.world);
});

clatter.core.Clatter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5064__auto__,k__5065__auto__){
var self__ = this;
var this__5064__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"audio-map","audio-map",-1898972372),null,new cljs.core.Keyword(null,"world","world",-418292623),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null),k__5065__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5064__auto____$1),self__.__meta),k__5065__auto__);
} else {
return (new clatter.core.Clatter(self__.world,self__.audio_map,self__.mute,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5065__auto__)),null));
}
});

clatter.core.Clatter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5062__auto__,k__5063__auto__,G__6780){
var self__ = this;
var this__5062__auto____$1 = this;
var pred__6785 = cljs.core.keyword_identical_QMARK_;
var expr__6786 = k__5063__auto__;
if(cljs.core.truth_(pred__6785.call(null,new cljs.core.Keyword(null,"world","world",-418292623),expr__6786))){
return (new clatter.core.Clatter(G__6780,self__.audio_map,self__.mute,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6785.call(null,new cljs.core.Keyword(null,"audio-map","audio-map",-1898972372),expr__6786))){
return (new clatter.core.Clatter(self__.world,G__6780,self__.mute,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6785.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),expr__6786))){
return (new clatter.core.Clatter(self__.world,self__.audio_map,G__6780,self__.__meta,self__.__extmap,null));
} else {
return (new clatter.core.Clatter(self__.world,self__.audio_map,self__.mute,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5063__auto__,G__6780),null));
}
}
}
});

clatter.core.Clatter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5067__auto__){
var self__ = this;
var this__5067__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"world","world",-418292623),self__.world],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"audio-map","audio-map",-1898972372),self__.audio_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mute","mute",1151223646),self__.mute],null))], null),self__.__extmap));
});

clatter.core.Clatter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5054__auto__,G__6780){
var self__ = this;
var this__5054__auto____$1 = this;
return (new clatter.core.Clatter(self__.world,self__.audio_map,self__.mute,G__6780,self__.__extmap,self__.__hash));
});

clatter.core.Clatter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5060__auto__,entry__5061__auto__){
var self__ = this;
var this__5060__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5061__auto__)){
return cljs.core._assoc.call(null,this__5060__auto____$1,cljs.core._nth.call(null,entry__5061__auto__,(0)),cljs.core._nth.call(null,entry__5061__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5060__auto____$1,entry__5061__auto__);
}
});

clatter.core.Clatter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"world","world",1222238904,null),new cljs.core.Symbol(null,"audio-map","audio-map",-258440845,null),new cljs.core.Symbol(null,"mute","mute",-1503212123,null)], null);
});

clatter.core.Clatter.cljs$lang$type = true;

clatter.core.Clatter.cljs$lang$ctorPrSeq = (function (this__5089__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clatter.core/Clatter");
});

clatter.core.Clatter.cljs$lang$ctorPrWriter = (function (this__5089__auto__,writer__5090__auto__){
return cljs.core._write.call(null,writer__5090__auto__,"clatter.core/Clatter");
});

clatter.core.__GT_Clatter = (function clatter$core$__GT_Clatter(world,audio_map,mute){
return (new clatter.core.Clatter(world,audio_map,mute,null,null,null));
});

clatter.core.map__GT_Clatter = (function clatter$core$map__GT_Clatter(G__6782){
return (new clatter.core.Clatter(new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(G__6782),new cljs.core.Keyword(null,"audio-map","audio-map",-1898972372).cljs$core$IFn$_invoke$arity$1(G__6782),new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(G__6782),null,cljs.core.dissoc.call(null,G__6782,new cljs.core.Keyword(null,"world","world",-418292623),new cljs.core.Keyword(null,"audio-map","audio-map",-1898972372),new cljs.core.Keyword(null,"mute","mute",1151223646)),null));
});

clatter.core.$.call(null,window).on("load",(function (){
var width = window.innerWidth;
var height = window.innerHeight;
var camera = (new THREE.PerspectiveCamera((45),(width / height),(1),(10000)));
var renderer = (new THREE.WebGLRenderer(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"antialias","antialias",-2073640634),true], null))));
var world = (new clatter.core.World((function (){var x__4772__auto__ = width;
var y__4773__auto__ = height;
return ((x__4772__auto__ > y__4773__auto__) ? x__4772__auto__ : y__4773__auto__);
})(),(new Physijs.Scene()),camera,(new THREE.DirectionalLight((16777215))),renderer,(new THREE.OrbitControls(camera)),cljs.core.atom.call(null,cljs.core.List.EMPTY),null,null,null));
var audio_map = (function (){var nodes = clatter.core.$.call(null,"audio");
var length = nodes.length;
var i = (0);
var m = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((i < length)){
var tag = nodes.get(i);
var char$ = clojure.string.replace.call(null,tag.id,/audio-/,"");
var G__6789 = (i + (1));
var G__6790 = cljs.core.assoc.call(null,m,char$,tag);
i = G__6789;
m = G__6790;
continue;
} else {
return m;
}
break;
}
})();
return clatter.core.start.call(null,(new clatter.core.Clatter(world,audio_map,cljs.core.atom.call(null,false),null,null,null)));
}));
